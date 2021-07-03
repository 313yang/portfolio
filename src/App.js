import { HashRouter, Link, Route } from "react-router-dom";
import Home from "./router/Home";
import About from "./router/About";
import Projects from "./router/Projects";
import Contact from "./router/Contact";

import "./assets/styles.css";
import { useEffect } from "react";
function App() {
  const handleScroll = (e) => {
    const {
      target: { id },
    } = e;
    if (id === "about") {
      window.scrollTo({ top: 950, behavior: "smooth" });
    } else if (id === "projects") {
      window.scrollTo({ top: 2100, behavior: "smooth" });
    } else if (id === "contact") {
      window.scrollTo({ top: 3000, behavior: "smooth" });
    }
  };
  useEffect(() => {
    const scrollEvent = () => {
      const about = document.getElementById("about");
      const project = document.getElementById("projects");
      const contact = document.getElementById("contact");

      if (window.scrollY <= 2000 && window.scrollY > 500) {
        about.style.opacity = "1";
        project.style.opacity = "0.6";
        contact.style.opacity = "0.6";
      } else if (window.scrollY <= 2900 && window.scrollY > 2000) {
        project.style.opacity = "1";
        about.style.opacity = "0.6";
        contact.style.opacity = "0.6";
      } else if (window.scrollY > 2900) {
        contact.style.opacity = "1";
        project.style.opacity = "0.6";
        about.style.opacity = "0.6";
      } else {
        about.style.opacity = "0.6";
      }
    };
    window.addEventListener("scroll", scrollEvent);
    return () => window.removeEventListener("scroll", scrollEvent);
  }, []);
  return (
    <>
      <HashRouter>
        <nav>
          <ul>
            <Link to="about">
              <li className="nav__list" id="about" onClick={handleScroll}>
                ABOUT
              </li>
            </Link>
            <Link to="projects">
              <li className="nav__list" id="projects" onClick={handleScroll}>
                PROJECTS
              </li>
            </Link>
            <Link to="contact">
              <li className="nav__list" id="contact" onClick={handleScroll}>
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
