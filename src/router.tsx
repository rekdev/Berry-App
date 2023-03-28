import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Settings from "./pages/settings";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="settings/" element={<Settings />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
