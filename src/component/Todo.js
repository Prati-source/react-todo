import React from 'react'
import { useDispatch } from 'react-redux';
import { removeTODO, toggleTODO } from '../redux/reducer/reducer';

function Todo( {todo,toComplete}) {

    const dispatch = useDispatch();

    function toDelete(){
        dispatch(removeTODO({id :todo.id}));
    }

    function toCompletetask(){
        dispatch(toggleTODO({id :todo.id, completed: !todo.completed}));
    }

   
  return (
    <div className='flex min-w-full h-14 w-64  p-2 border-2 bg-blue-300 hover:bg-blue-500 border-white rounded-2xl  ' style={{
        backgroundColor: todo.completed? '#8A2BE2' : null
    }}  >
        <input type='checkbox' className=' my-3 w-1/6  ' onClick={toCompletetask} />
        <li className='my-2 w-4/6 text-white justify-center  ' >{todo.text}</li>
        <button className='w-1/6  hover:white bg-blue-500 text-white rounded-full ' onClick={toDelete}>X</button>
    </div>
  )
}

export default Todo;