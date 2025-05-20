import { Route, Routes } from "react-router";
import reactLogo from "../assets/react.svg";

const Aside = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Inicio</h1>} />
        <Route path="/contacto" element={<h1>Contacto</h1>} />
        <Route path="/sobre-nosotros" element={<h1>Sobre Nosotros</h1>} />
      </Routes>

      <a href="https://react.dev" target="_blank">
        <img
          src={reactLogo}
          className="w-36 m-2 hover:animate-spin"
          alt="React logo"
        />
      </a>
    </>
  );
};

export default Aside;
