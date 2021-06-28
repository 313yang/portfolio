import { HashRouter, Link, Route } from "react-router-dom";
import Home from "./router/Home";
import "./assets/styles.css";
import About from "./router/About";

function App() {
  const handleScroll = (e) => {
    const {
      target: { id },
    } = e;
    if (id === "about") {
      window.scrollTo({ top: 1000, behavior: "smooth" });
    } else if (id === "works") {
      window.scrollTo({ top: 2000, behavior: "smooth" });
    } else if (id === "contact") {
      window.scrollTo({ top: 3000, behavior: "smooth" });
    }
  };
  return (
    <>
      <HashRouter>
        <nav>
          <ul>
            <Link to="about">
              <li id="about" onClick={handleScroll}>
                ABOUT
              </li>
            </Link>
            <Link to="works">
              <li id="works" onClick={handleScroll}>
                WORKS
              </li>
            </Link>
            <Link to="contact">
              <li id="contact" onClick={handleScroll}>
                CONTACT
              </li>
            </Link>
          </ul>
        </nav>
        <Route path="/" component={Home} />
        <Route path="/" component={About} />
      </HashRouter>
    </>
  );
}

export default App;
