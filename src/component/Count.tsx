import { useState } from "react";
import Button from "./design/Button";

const Count = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <Button
          name={`count is ${count}`}
          onclick={() => setCount((count) => count + 1)}
        />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default Count;
