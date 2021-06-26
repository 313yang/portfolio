import { HashRouter, Route } from "react-router-dom";
import Home from "./router/Home";
import "./App.css";

function App() {
  return (
    <>
      <HashRouter>
        <Route path="/" exact={true} component={Home} />
      </HashRouter>
    </>
  );
}

export default App;
