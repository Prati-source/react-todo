import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTODO } from '../redux/reducer/reducer' ;


function Todoform() {
    const [todo, setTodo] = useState({
      });


        const dispatch = useDispatch();

    const handleChange = (e) => {
       setTodo({...todo,text:e.target.value});
    };





    function handleSubmit(e)  {
        e.preventDefault();
        
        if(todo.text !== ''){
        dispatch(addTODO({
            text: todo.text
         } )) ;
        todo.text='';
        
        }
        }
    

  return (
      <div>
          

        <form name = 'Tit' className='flex justify-center ' onSubmit={ handleSubmit}>
            <input type='text' placeholder='Add Todo' value={todo.text} name='title' className='font-sans text-blue-400 border-blue-300' onChange={handleChange}  />
            <button  className='mx-3 bg-blue-400 text-white my-2 p-2 border-blue-300 hover:bg-green-500 rounded'>Add Todo</button>
        </form>
        
        </div>
    
  )
}

export default Todoform;