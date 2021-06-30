import { HashRouter, Link, Route } from "react-router-dom";
import Home from "./router/Home";
import About from "./router/About";
import Projects from "./router/Projects";
import Contact from "./router/Contact";

import "./assets/styles.css";
function App() {
  const handleScroll = (e) => {
    const {
      target: { id },
    } = e;
    if (id === "about") {
      window.scrollTo({ top: 1000, behavior: "smooth" });
    } else if (id === "projects") {
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
            <Link to="projects">
              <li id="projects" onClick={handleScroll}>
                PROJECTS
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
        <Route path="/" component={Projects} />
        <Route path="/" component={Contact} />
      </HashRouter>
    </>
  );
}

export default App;
