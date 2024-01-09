import { Outlet } from "react-router-dom";
import NavBar from "./Pages/NavBar/NavBar";
import Footer from "./Pages/Footer/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
