import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageLayout from "./Components/PageLayout";
import Home from "./Page/Home";
import PlaceToStay from "./Page/PlaceToStay";
import Popup from "./Components/Popup";
import ErrorPage from "./Components/ErrorPage";
import MenuNav from "./Components/MenuNav";
function App() {
  const [show, setShow] = useState(false);
  const [navShow, setNavShow] = useState(false);
  return (
    <div className="">
      <Router>
        <div>
          {show && <Popup setShow={setShow} />}

          {navShow && <MenuNav setShow={setShow} setNavShow={setNavShow} />}
          <Routes>
            <Route
              element={<PageLayout setNavShow={setNavShow} setShow={setShow} />}
            >
              <Route path="/" element={<Home />} />
              <Route path="/place-to-stay" element={<PlaceToStay />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
