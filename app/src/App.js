import { Fragment } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./components/Context";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Menu } from "./components/Menu";

function App() {
  return (
    <Fragment>
      <HashRouter>
        <AppProvider>
          <Header />
          <Menu />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </AppProvider>
      </HashRouter>
    </Fragment>
  );
}

export default App;
