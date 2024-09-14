import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NavbarTop from "./components/Navbar/NavbarTop";
import NavbarBottom from "./components/Navbar/NavbarBottom";
import { Link, Outlet } from "react-router-dom";
import { FcComments } from "react-icons/fc";
import { useSelector } from "react-redux";

function App() {
  const [count, setCount] = useState(0);
  const store = useSelector((state) => state)

  return (
    <>
      <header>
        <NavbarTop />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <NavbarBottom />
        <Link
          to="/chat"
          className="btn btn-circle text-xl size-12 fixed bottom-20 right-5 z-50"
        >
          <FcComments />
        </Link>
      </footer>
    </>
  );
}

export default App;
