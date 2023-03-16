import { HomePage, FullInfo } from "pages";
import { Route, Routes } from "react-router-dom";
import { React } from "react";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:id" element={<FullInfo />} />
    </Routes>
  );
}

export default App;
