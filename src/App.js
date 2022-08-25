import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Board } from "./Board";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
