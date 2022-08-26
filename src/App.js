import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Board } from "./Board";
import { Result } from "./Result";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/board" element={<Board />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
