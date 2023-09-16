import { useState } from "react";

export default function Botao() {
  const [count, setCount] = useState(0);

  return (
    
    <>

    <p>{count}</p>
      <button onClick={(event) => setCount(count + 1)}>
        adicionar
      </button>
      <button onClick={(event) => setCount(count - 1)}>regressar </button>
    </>
  );
}
