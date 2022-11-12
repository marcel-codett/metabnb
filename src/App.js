import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageLayout from "./Components/PageLayout";
import Home from "./Page/Home";
function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
