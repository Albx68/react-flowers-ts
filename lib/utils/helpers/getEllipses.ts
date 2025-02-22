interface IGetEllipses {
  centerX: number;
  centerY: number;
  radius: number;
  ellipseCount: number;
  svgWidth: number;
  svgHeight: number;
  petalOffset?: number;
}

export const getEllipses = ({
  centerX,
  centerY,
  radius,
  ellipseCount,
  svgWidth,
  svgHeight,
  petalOffset = 2,
}: IGetEllipses) => {
  //this will offset petal distance from center, higher the number, less distance from center

  // Dynamically calculate ellipse radii based on number of petals and SVG size
  const maxRadiusX = svgWidth / 2 - 10; // Leave some margin
  const maxRadiusY = svgHeight / 2 - 10; // Leave some margin

  // Calculate ellipse size based on number of petals, ensuring they fit in the SVG container
  const ellipseRx = Math.min(
    maxRadiusX / Math.sqrt(ellipseCount),
    svgHeight / petalOffset
  ); // Scale by number of petals and radius
  const ellipseRy = Math.min(
    maxRadiusY / Math.sqrt(ellipseCount),
    svgHeight / petalOffset
  );

  const ellipses: { cx: number; cy: number; rx: number; ry: number }[] = [];
  const angleStep = (2 * Math.PI) / ellipseCount; // Divide the circle into equal parts

  for (let i = 0; i < ellipseCount; i++) {
    const angle = angleStep * i;
    // Calculate the center position for the ellipse
    const cx = centerX + radius * Math.cos(angle);
    const cy = centerY + radius * Math.sin(angle);

    ellipses.push({
      cx,
      cy,
      rx: ellipseRx,
      ry: ellipseRy,
    });
  }

  return ellipses;
};
