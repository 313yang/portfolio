import { HashRouter, Route } from "react-router-dom";
import Home from "./router/Home";
import "./assets/styles.css";

function App() {
  const handleScroll = (e) => {
    const {
      target: { id },
    } = e;
    console.log(id);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (id === "about") {
      window.scrollTo({ top: 1000, behavior: "smooth" });
    } else if (id === "project") {
      window.scrollTo({ top: 2000, behavior: "smooth" });
    } else if (id === "contact") {
      window.scrollTo({ top: 3000, behavior: "smooth" });
    }
  };
  return (
    <>
      <HashRouter>
        <nav>
          <button id="home" onClick={handleScroll}>
            HOME
          </button>
          <button id="about" onClick={handleScroll}>
            ABOUT
          </button>
          <button id="project" onClick={handleScroll}>
            PROJECT
          </button>
          <button id="contact" onClick={handleScroll}>
            CONTACT
          </button>
        </nav>
        <Route path="/" exact={true} component={Home} />
      </HashRouter>
    </>
  );
}

export default App;
