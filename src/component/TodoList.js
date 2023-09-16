import React, { useState, useEffect } from "react";
import UserStatus from "./UserStatus";

function TodoList() {
  const [tarefas, setTarefas] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Condição de usuário logado

  // Montagem (equivalente ao componentDidMount)
  useEffect(() => {
    console.log("Componente montado");

    // Função de limpeza (equivalente ao componentWillUnmount)
    return () => {
      console.log("Componente desmontado");
    };
  }, []); // A dependência vazia faz com que isso só seja executado na montagem

  // Atualização (equivalente ao componentDidUpdate)
  useEffect(() => {
    console.log("Componente atualizado");
  }, [tarefas]); // Quando 'tarefas' mudar, este useEffect será acionado

  const handleAdicionarTarefa = () => {
    const novaTarefa = prompt("Digite uma nova tarefa:");
    if (novaTarefa) {
      setTarefas([...tarefas, novaTarefa]);
    }
  };

  const handleRemoverTarefa = (indice) => {
    setTarefas([...tarefas.slice(0, indice), ...tarefas.slice(indice + 1)]);
  };

  return (
    <div>
      <h1>Lista de tarefas</h1>
       {/* Renderização condicional do status do usuário */}
      <UserStatus isLoggedIn={isLoggedIn} />    
      <ul>
        {tarefas.map((tarefa, indice) => (
          <li key={indice}>
            <input type="checkbox" checked={tarefa.concluido} />
            <span>{tarefa}</span>
            <button onClick={() => handleRemoverTarefa(indice)}>
              Remover
            </button>
          </li>
        ))}
      </ul>
      <button onClick={handleAdicionarTarefa}>Adicionar tarefa</button>

      {/* Renderização condicional baseada na quantidade de tarefas */}
      {tarefas.length === 0 ? (
        <p>Nenhuma tarefa disponível.</p>
      ) : (
        <p>Total de tarefas: {tarefas.length}</p>
      )}
    </div>
  );
}

export default TodoList;
