import { Flower } from "../lib/components/Flower/index";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
      }}
    >
      <Flower
        size={200}
        petalCount={10}
        petalColor="pink"
        baseColor="yellow"
        petalType="heart"
        baseRadiusFactor={4}
      />
    </div>
  );
};

export default App;
