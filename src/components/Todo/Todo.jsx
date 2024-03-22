import React from 'react'
import { Trash, CheckCircle, Pencil } from "@phosphor-icons/react";

/* Função Factory que retorna o ícone correspondente com base no tipo */
const IconFactory = (type, size) => {
  switch (type) {
    case 'check':
      return <CheckCircle size={size} />;
    case 'trash':
      return <Trash size={size} />;
    case 'edit':
      return <Pencil size={size} />;
    default:
      return null;
  }
}

/* Componente `Todo` que exibe uma única tarefa */
const Todo = ({ todo, removeTodo, completeTodo, startEditingTodo }) => {
  return (
    <div className='todo' style={{ textDecoration: todo.completo ? "line-through" : "" }}>
      <div className="conteudo">
        {/* Exibe o texto da tarefa */}
        <p>{todo.texto}</p>
        {/* Exibe a categoria da tarefa entre parênteses */}
        <p className="categoria">
          ({todo.categoria})
        </p>
      </div>
      <div>
        {/* Botão que irá marcar uma tarefa como concluída */}
        <button className='complete' onClick={() => completeTodo(todo.id)}>
          {IconFactory('check', 20)}
        </button>
        {/* Botão que irá deletar uma tarefa */}
        <button className='delete' onClick={() => removeTodo(todo.id)}>
          {IconFactory('trash', 20)}
        </button>
        {/* Botão para iniciar a edição de uma tarefa */}
        <button className='edit' onClick={() => startEditingTodo(todo.id, todo.texto)}>
          {IconFactory('edit', 20)}
        </button>
      </div>
    </div>
  )
}

export default Todo
