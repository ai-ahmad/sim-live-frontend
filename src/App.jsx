import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NavbarTop from "./components/Navbar/NavbarTop";
import NavbarBottom from "./components/Navbar/NavbarBottom";
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

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
      </footer>
    </>
  );
}

export default App;
