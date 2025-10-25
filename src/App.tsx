import Mainwel from "./mainwel.tsx";
import { Routes, Route, HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Mainwel></Mainwel>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
