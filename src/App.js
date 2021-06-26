import { HashRouter, Route } from "react-router-dom";
import Home from "./router/Home";
import "./App.css";

function App() {
  return (
    <>
      <HashRouter>
      <nav>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
      </nav>
        <Route path="/" exact={true} component={Home} />
      </HashRouter>
    </>
  );
}

export default App;
