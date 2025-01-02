
import {useState} from "react";
import TodoList from './TodoList'
import Footer from './Footer';
import Form from './Form'
export default function Todo(){
  const[todos,setTodos]=useState([]);
  const totalTodos=todos.length;
  const completedtodos=todos.filter((todo)=>todo.done).length
    return(
    <div>
      <Form todos={todos} 
      setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
     <Footer completedtodos={completedtodos} totalTodos={totalTodos}/>
    </div>);
    
}