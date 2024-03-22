import React, { useState } from 'react'
import { ListPlus } from "@phosphor-icons/react";

/* Função Factory que retorna o ícone correspondente com base no tipo */
const IconFactory = (type, size) => {
  switch (type) {
    case 'plus':
      return <ListPlus size={size} />;
    default:
      return null;
  }
}

/* Componente `Todoform` para adicionar novas tarefas */
const Todoform = ({ addTodo }) => {
    const [value, setValue] = useState("")
    const [category, setCategory] = useState("")

    /* Manipulador de envio do formulário */
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!value || !category) return

        /* Chama a função `addTodo` passando o texto e a categoria como argumentos */
        addTodo(value, category)

        /* Limpa os campos de entrada após a adição da tarefa */
        setValue("")
        setCategory("")
        
    }
  return (
    <div className='todo-form'>
        <h2>{IconFactory('plus', 22)} Criar Evento</h2>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Digite o titulo do Evento' value={value} onChange={(e) => setValue(e.target.value)}/>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione um período para o evento:</option>
                <option value="Manhâ">Manhâ</option>
                <option value="Tarde">Tarde</option>
                <option value="Noite">Noite</option>
            </select>
            <button type='submit'>Criar Evento</button>
        </form>
    </div>
  )
}

export default Todoform
