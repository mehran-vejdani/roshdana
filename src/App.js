import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, TopHeader, Footers } from "./components";

function App() {
  return (
    <div>
      <Router>
        <TopHeader />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>

      <Footers />
    </div>
  );
}

export default App;
