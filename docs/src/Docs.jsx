import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Get from "./pages/Get";
import Buttons from "./pages/Buttons";

function Docs() {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route>
            <Route path="/" element={<Get />} />
            <Route path="/buttons" element={<Buttons />} />
          </Route>
        </Routes>
      </MainLayout>
    </>
  );
}

export default Docs;
