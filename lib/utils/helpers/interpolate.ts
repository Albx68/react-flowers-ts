export type InterpolateConfig = {
  inputRange: number[];
  outputRange: number[];
  extrapolate?: "extend" | "clamp" | "identity";
};

const interpolate = (
  value: number,
  { inputRange, outputRange, extrapolate = "extend" }: InterpolateConfig
): number => {
  if (inputRange.length !== outputRange.length) {
    throw new Error("Input and output ranges must have the same length");
  }

  const index = inputRange.findIndex((inputValue, i) => {
    if (value < inputValue) {
      return i === 0 || value >= inputRange[i - 1];
    }
    return false;
  });

  if (index === -1) {
    if (extrapolate === "identity") {
      return value;
    } else if (extrapolate === "clamp") {
      if (value < inputRange[0]) return outputRange[0];
      if (value > inputRange[inputRange.length - 1])
        return outputRange[outputRange.length - 1];
    } else if (extrapolate === "extend") {
      if (value < inputRange[0]) {
        const slope =
          (outputRange[1] - outputRange[0]) / (inputRange[1] - inputRange[0]);
        return outputRange[0] + (value - inputRange[0]) * slope;
      }
      if (value > inputRange[inputRange.length - 1]) {
        const slope =
          (outputRange[outputRange.length - 1] -
            outputRange[outputRange.length - 2]) /
          (inputRange[inputRange.length - 1] -
            inputRange[inputRange.length - 2]);
        return (
          outputRange[outputRange.length - 1] +
          (value - inputRange[inputRange.length - 1]) * slope
        );
      }
    }
  } else {
    const startInput = inputRange[index - 1];
    const endInput = inputRange[index];
    const startOutput = outputRange[index - 1];
    const endOutput = outputRange[index];
    const progress = (value - startInput) / (endInput - startInput);

    return startOutput + progress * (endOutput - startOutput);
  }

  throw new Error("Unexpected value in interpolation logic");
};

export default interpolate;
