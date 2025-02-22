import { TPetal } from "../types/Path";

type TGetPetalPaths = {
  type: TPetal;
  petalHeight: number;
};
export const getPetalPaths = ({ type, petalHeight }: TGetPetalPaths) => {
  const petalWidth = petalHeight / 2; // Proportional width
  switch (type) {
    case "heart":
      return `
        M 0,${-petalHeight} 
        C ${-petalWidth},${-petalHeight * 1.5} ${-petalWidth},${
        -petalHeight / 2
      } 0,0 
        C ${petalWidth},${-petalHeight / 2} ${petalWidth},${
        -petalHeight * 1.5
      } 0,${-petalHeight}
      `;

    case "flower":
      return `M 0,0 
                C ${-petalWidth},${
        -petalHeight / 2
      } ${-petalWidth},${-petalHeight} 0,${-petalHeight} 
                C ${petalWidth},${-petalHeight} ${petalWidth},${
        -petalHeight / 2
      } 0,0
            `;

    case "heartFlipped":
      return `
                M 0,0 
                C ${-petalWidth / 2},${-petalWidth / 2} ${-petalWidth},${
        petalWidth / 4
      } 0,${petalWidth} 
                C ${petalWidth},${petalWidth / 4} ${petalWidth / 2},${
        -petalWidth / 2
      } 0,0
            `;

    case "rose":
      return `
    M 0,0 
    C ${-petalWidth / 1.5},${
        -petalHeight / 3
      } ${-petalWidth},${-petalHeight} 0,${-petalHeight} 
    C ${petalWidth},${-petalHeight} ${petalWidth / 1.5},${-petalHeight / 3} 0,0
  `;
    case "sunflower":
      return `
    M 0,0 
    C ${-petalWidth / 2},${-petalHeight / 2} ${
        -petalWidth / 3
      },${-petalHeight} 0,${-petalHeight * 1.2} 
    C ${petalWidth / 3},${-petalHeight} ${petalWidth / 2},${
        -petalHeight / 2
      } 0,0
  `;
    case "daisy":
      return `
    M 0,0 
    L ${-petalWidth / 4},${-petalHeight} 
    Q 0,${-petalHeight * 1.1} ${petalWidth / 4},${-petalHeight} 
    L 0,0
  `;
    case "tulip":
      return `
    M 0,0 
    C ${-petalWidth / 2},${-petalHeight / 2} ${
        -petalWidth / 2
      },${-petalHeight} 0,${-petalHeight} 
    C ${petalWidth / 2},${-petalHeight} ${petalWidth / 2},${
        -petalHeight / 2
      } 0,0
  `;
    case "lily":
      return `
    M 0,0 
    C ${-petalWidth / 1.5},${-petalHeight / 2} ${
        -petalWidth / 1.5
      },${-petalHeight} 0,${-petalHeight * 1.2} 
    C ${petalWidth / 1.5},${-petalHeight} ${petalWidth / 1.5},${
        -petalHeight / 2
      } 0,0
  `;
    case "orchid":
      return `
    M 0,0 
    C ${-petalWidth},${-petalHeight / 3} ${-petalWidth / 2},${-petalHeight} 0,${
        -petalHeight * 1.1
      } 
    C ${petalWidth / 2},${-petalHeight} ${petalWidth},${-petalHeight / 3} 0,0
  `;
    case "lotus":
      return `
    M 0,0 
    C ${-petalWidth / 1.2},${-petalHeight / 3} ${
        -petalWidth / 2
      },${-petalHeight} 0,${-petalHeight * 1.2} 
    C ${petalWidth / 2},${-petalHeight} ${petalWidth / 1.2},${
        -petalHeight / 3
      } 0,0
  `;

    case "cherryBlossom":
      return `
    M 0,0 
    C ${-petalWidth / 1.5},${-petalHeight / 2} ${
        -petalWidth / 2
      },${-petalHeight} 0,${-petalHeight * 1.1} 
    C ${petalWidth / 2},${-petalHeight} ${petalWidth / 1.5},${
        -petalHeight / 2
      } 0,0
  `;
    case "bluebell":
      return `
    M 0,0 
    C ${-petalWidth / 3},${-petalHeight / 2} ${
        -petalWidth / 1.5
      },${-petalHeight} 0,${-petalHeight * 1.1} 
    C ${petalWidth / 1.5},${-petalHeight} ${petalWidth / 3},${
        -petalHeight / 2
      } 0,0
  `;
    case "marigold":
      return `
    M 0,0 
    C ${-petalWidth / 1.5},${-petalHeight / 3} ${-petalWidth / 1.5},${
        -petalHeight / 1.5
      } 0,${-petalHeight} 
    C ${petalWidth / 1.5},${-petalHeight / 1.5} ${petalWidth / 1.5},${
        -petalHeight / 3
      } 0,0
  `;
    case "ellipse":
      return `
        M 0,0 
        C ${-petalWidth},${
        -petalHeight / 3
      } ${-petalWidth},${-petalHeight} 0,${-petalHeight} 
        C ${petalWidth},${-petalHeight} ${petalWidth},${-petalHeight / 3} 0,0
      `;

    case "teardrop":
      return `
        M 0,0 
        Q ${-petalWidth / 2},${-petalHeight / 2} 0,${-petalHeight} 
        Q ${petalWidth / 2},${-petalHeight / 2} 0,0
      `;

    case "spade":
      return `
        M 0,0 
        C ${-petalWidth},${-petalHeight / 2} ${
        -petalWidth / 2
      },${-petalHeight} 0,${-petalHeight} 
        C ${petalWidth / 2},${-petalHeight} ${petalWidth},${
        -petalHeight / 2
      } 0,0
      `;

    case "triangle":
      return `
        M 0,0 
        L ${-petalWidth},${-petalHeight} 
        L ${petalWidth},${-petalHeight} 
        Z
      `;

    case "flame":
      return `
        M 0,0 
        C ${-petalWidth / 2},${-petalHeight / 2} ${-petalWidth},${
        -petalHeight * 1.2
      } 0,${-petalHeight} 
        C ${petalWidth},${-petalHeight * 1.2} ${petalWidth / 2},${
        -petalHeight / 2
      } 0,0
      `;

    case "diamond":
      return `
        M 0,0 
        L ${-petalWidth / 2},${-petalHeight / 2} 
        L 0,${-petalHeight} 
        L ${petalWidth / 2},${-petalHeight / 2} 
        Z
      `;

    case "rounded":
      return `
        M 0,0 
        Q ${-petalWidth},${-petalHeight / 2} 0,${-petalHeight} 
        Q ${petalWidth},${-petalHeight / 2} 0,0
      `;
  }
};
