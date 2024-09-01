import React, { useState } from 'react';
import './style.css'


export function TodoList() {
  // Estado para armazenar as tarefas, com algumas tarefas padrão
  const [tasks, setTasks] = useState([
    { text: '10 agachamentos', completed: false },
    { text: '10 abdominais', completed: false },
    { text: '30 minutos de corrida', completed: false },
  ]);

  const [newTask, setNewTask] = useState('');

  // Função para adicionar uma nova tarefa
  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask(''); // Limpa o campo de entrada
    }
  };

  // Função para alternar o estado de conclusão de uma tarefa ao clicar no texto
  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Função para remover uma tarefa
  const removeTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Adicione mais exercícios"
      />
      <button onClick={addTask}>Adicionar</button>

      <ul>
        {tasks.map((task, index) => (
          <li id='teste98' key={index} className={task.completed ? 'completed' : ''}>
            <span onClick={() => toggleTaskCompletion(index)}>
              {task.text}
            </span>
            <button onClick={() => removeTask(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}


