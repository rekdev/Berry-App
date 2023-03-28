import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import AppRoutes from "./router";
import "./style/app.scss";

function App() {
  return (
    <>
      <Navbar />
      <Menu />
      <div className="app-view">
        <AppRoutes />
      </div>
    </>
  );
}

export default App;
