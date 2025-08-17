import Mainwel from "./mainwel.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainwel></Mainwel>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
