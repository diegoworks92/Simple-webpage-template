import Button from "./design/Button";
import viteLogo from "/vite.svg";
const Nav = () => {
  return (
    <>
      <a href="https://vite.dev" target="_blank">
        <img
          src={viteLogo}
          className="logo w-20 mb-2 xl:mb-0"
          alt="Vite logo"
        />
      </a>
      <div className="flex  text-2xl gap-6 h-14">
        <Button name="Inicio" />
        <Button name="Contacto" />
        <Button name="Sobra Nosotros" />
      </div>
    </>
  );
};

export default Nav;
