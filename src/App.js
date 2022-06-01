
import React from 'react';
import { useSelector } from 'react-redux';
import Todoform from './component/Todoform';
import TodoList from './component/TodoList';


function App() {

  const todos = useSelector(state => state.todos);
  return (
    <div >
      
      <Todoform  />
      <TodoList todos={todos}   />

    </div>
  );
}

export default App;
