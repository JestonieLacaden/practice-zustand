import React from 'react'
import { useTodoStore } from '../stores/useTodoStore'

const TodoItem = ({ todoItem }) => {
const removeTodo = useTodoStore((state) => state.removeTodo)

  return (
      <div className='todoItem'>
          <span>{todoItem}</span>
          <button onClick={() => removeTodo(todoItem)}>Remove</button>
    </div>
  )
}

export default TodoItem