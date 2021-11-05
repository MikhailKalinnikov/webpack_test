import "../styles/index.scss";
import Recipes from "./Recipes";
// import sword from "../images/swc-sword.png";
// import swordSVG from "../images/sword.svg";

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Hello, React with Webpack! How are you?</h1>
        </section>
        {/* <img src={sword} alt="sword" width="150" />
        <img src={swordSVG} alt="swordSVG" width="150" /> */}
        <Recipes />
      </main>
    </>
  );
};

export default App;
