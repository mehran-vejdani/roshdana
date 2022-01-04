import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, TopHeader, Footers, Archive } from "./components";

function App() {
  return (
    <div>
      <Router>
        <TopHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Archive" element={<Archive />} />
        </Routes>
      </Router>

      <Footers />
    </div>
  );
}

export default App;
