import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageLayout from "./Components/PageLayout";
import Home from "./Page/Home";
import PlaceToStay from "./Page/PlaceToStay";
function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/place-to-stay" element={<PlaceToStay />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
