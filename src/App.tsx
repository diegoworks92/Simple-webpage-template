import Count from "./component/Count";
import Lorem from "./component/Lorem";
import Nav from "./component/Nav";
import Aside from "./component/Aside";

function App() {
  return (
    <div className="bg-red-600 w-full h-full grid grid-cols-3 grid-rows-[auto_auto_auto_1fr]">
      <header className="col-span-3 bg-green-950 flex justify-center items-center fixed w-full">
        <h1 className="text-xl md:text-5xl ">PRUEBAS DE PAGINA WEB</h1>
      </header>

      <nav className="col-span-3 bg-orange-950 flex items-center flex-col md:flex-row md:justify-between p-4 md:p-2 md:h-28 mt-6 md:mt-10">
        <Nav />
      </nav>

      <article className="col-span-3 md:col-span-2 bg-fuchsia-900 flex flex-col items-center h-full">
        <h2 className="text-2xl">ARTÍCULOS</h2>
        <section className="bg-rose-900 flex flex-col items-center p-4 text-2xl w-full">
          <Count />
        </section>

        <section className="bg-teal-950 flex flex-col xl:flex-row justify-between">
          <Lorem />
        </section>
        <section className="bg-indigo-950 w-full h-full p-2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            libero recusandae commodi natus, reprehenderit ratione architecto ad
            ex illum delectus enim, deleniti perspiciatis exercitationem. Illum
            aut mollitia, iusto nemo accusantium ipsam non delectus enim error,
            sapiente vero sed dolor temporibus!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            libero recusandae commodi natus, reprehenderit ratione architecto ad
            ex illum delectus enim, deleniti perspiciatis exercitationem. Illum
            aut mollitia, iusto nemo accusantium ipsam non delectus enim error,
            sapiente vero sed dolor temporibus!
          </p>
        </section>
      </article>

      <aside className="col-span-3 md:col-span-1 bg-amber-700 flex justify-center items-center h-full flex-col text-4xl">
        <Aside />
      </aside>

      <section className="col-span-3 bg-amber-600 w-full h-full p-2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
          libero recusandae commodi natus, reprehenderit ratione architecto ad
          ex illum delectus enim, deleniti perspiciatis exercitationem. Illum
          aut mollitia, iusto nemo accusantium ipsam non delectus enim error,
          sapiente vero sed dolor temporibus!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
          libero recusandae commodi natus, reprehenderit ratione architecto ad
          ex illum delectus enim, deleniti perspiciatis exercitationem. Illum
          aut mollitia, iusto nemo accusantium ipsam non delectus enim error,
          sapiente vero sed dolor temporibus!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
          libero recusandae commodi natus, reprehenderit ratione architecto ad
          ex illum delectus enim, deleniti perspiciatis exercitationem. Illum
          aut mollitia, iusto nemo accusantium ipsam non delectus enim error,
          sapiente vero sed dolor temporibus!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
          libero recusandae commodi natus, reprehenderit ratione architecto ad
          ex illum delectus enim, deleniti perspiciatis exercitationem. Illum
          aut mollitia, iusto nemo accusantium ipsam non delectus enim error,
          sapiente vero sed dolor temporibus!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
          libero recusandae commodi natus, reprehenderit ratione architecto ad
          ex illum delectus enim, deleniti perspiciatis exercitationem. Illum
          aut mollitia, iusto nemo accusantium ipsam non delectus enim error,
          sapiente vero sed dolor temporibus!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
          libero recusandae commodi natus, reprehenderit ratione architecto ad
          ex illum delectus enim, deleniti perspiciatis exercitationem. Illum
          aut mollitia, iusto nemo accusantium ipsam non delectus enim error,
          sapiente vero sed dolor temporibus!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
          libero recusandae commodi natus, reprehenderit ratione architecto ad
          ex illum delectus enim, deleniti perspiciatis exercitationem. Illum
          aut mollitia, iusto nemo accusantium ipsam non delectus enim error,
          sapiente vero sed dolor temporibus!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
          libero recusandae commodi natus, reprehenderit ratione architecto ad
          ex illum delectus enim, deleniti perspiciatis exercitationem. Illum
          aut mollitia, iusto nemo accusantium ipsam non delectus enim error,
          sapiente vero sed dolor temporibus!
        </p>
      </section>

      <footer className="col-span-3 bg-blue-950 flex justify-center items-center text-xl md:text-2xl ">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </footer>
    </div>
  );
}

export default App;
