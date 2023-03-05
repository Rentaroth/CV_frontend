import { Fragment } from "react";
import { HashRouter } from "react-router-dom";

import { Menu } from "./components/Menu";

function App() {
  return (
    <Fragment>
      <HashRouter>
        <Menu />
      </HashRouter>
    </Fragment>
  );
}

export default App;
