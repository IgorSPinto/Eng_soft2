import React, { useState } from "react";
import "./App.css";

/* Importa os componentes personalizados */
import Todo from "./components/Todo/Todo";
import Todoform from "./components/Todoform/Todoform";
import Search from "./components/Search/Search";

/* Importa o ícone de lista de verificação da biblioteca de ícones Phosphor */
import { ListChecks, Confetti } from "@phosphor-icons/react";

/* Função Factory que retorna o ícone correspondente com base no tipo */
const IconFactory = (type, size) => {
  switch (type) {
    case 'party':
      return <Confetti  size={size} />;
    default:
      return null;
  }
}

function App() {
  /* Define o estado inicial para a lista de tarefas (todos) e a pesquisa (search) */
  const [todos, setTodos] = useState([
    {
      id: 1,
      texto: "Festa Julhina",
      categoria: "Tarde",
      completo: false,
    },
  ]);

  const [search, setSearch] = useState("");

  /* Função para adicionar uma nova tarefa à lista */
  const addTodo = (texto, categoria) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        texto,
        categoria,
        completo: false,
      },
    ];

    setTodos(newTodos);
  };

  /* Função para remover uma tarefa da lista */
  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) => (todo.id !== id ? todo : null));
    setTodos(filteredTodos);
  };

  /* Função para marcar uma tarefa como completa ou incompleta */
  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) => (todo.id === id ? (todo.completo = !todo.completo) : todo));
    setTodos(newTodos);
  };

  /* Estado para controlar a edição de uma tarefa */
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editedTodoText, setEditedTodoText] = useState("");

  /* Função para iniciar a edição de uma tarefa */
  const startEditingTodo = (id, texto) => {
    setEditingTodoId(id);
    setEditedTodoText(texto);
  };

  /* Função para salvar a edição de uma tarefa */
  const editTodo = (id, newText) => {
    const newTodos = todos.map((todo) => (todo.id === id ? { ...todo, texto: newText } : todo));
    setTodos(newTodos);
    setEditingTodoId(null);
    setEditedTodoText("");
  };

  return (
    <div className="app">
      <h1>
        {IconFactory('party', 28)} Gestão de Eventos
      </h1>

      <div className="todo-list">
        {/* Componente de pesquisa */}
        <Search search={search} setSearch={setSearch} />

        {/* Componente de formulário para adicionar tarefas */}
        <Todoform addTodo={addTodo} />

        {/* map de array que exibe todos os objetos da todo list */}
        {todos
          .filter((todo) => todo.texto.toLowerCase().includes(search.toLowerCase()))
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
              startEditingTodo={startEditingTodo}
            />
          ))}

        {editingTodoId && (
          <div className="edit-todo">
            <input
              type="text"
              value={editedTodoText}
              placeholder="Edite aqui sua tarefa"
              onChange={(e) => setEditedTodoText(e.target.value)}
            />
            <button onClick={() => editTodo(editingTodoId, editedTodoText)}>Salvar</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
