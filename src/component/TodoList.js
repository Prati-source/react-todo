import React from 'react'
import Todo from './Todo'

function TodoList({ todos, todoDelete, toComplete }) {
  return (
    <div className='flex justify-center '><ul  >
      {todos.map(todo => 
        <Todo key={todo.id} todo={todo}  toComplete={toComplete} />)}
      </ul></div>
  )
}

export default TodoList