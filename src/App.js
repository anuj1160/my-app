import "./App.css";
import Body from "./components/Body";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Body />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
