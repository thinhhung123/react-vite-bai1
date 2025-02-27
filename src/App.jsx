import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import reactLogo from './assets/react.svg' ;
import { useState } from 'react';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import { Outlet } from 'react-router-dom';


// () => {} (viết body của arrow function)
const TodoApp = () => {
  const [todoList, setTodoList] = useState ([
    // {id:1 , name: 'Learning React'},
    // {id: 2, name: 'Watching YouToBe'}
  ])
  
//  function myFunction(){
//   console.log(">>> run my function")
//  }
//react
// const myFunction = () =>{
//   console.log (">>> run my arrow function")
// }
// myFunction();

const addNewTodo = (name) => {
  const newTodo ={
    id: randomIntFromInterval(1, 100000), name: name
  }
  setTodoList([... todoList, newTodo])
}
const randomIntFromInterval = (min, max) => { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const deleteTodo = (id) => {
  const newTodo = todoList.filter(item => item.id !== id);
setTodoList(newTodo)
}
return (
  <div className="todo-container">
  <div className="todo-title">Todo List</div>
  <TodoNew
  addNewTodo={addNewTodo} />
  {todoList.length > 0 ?
  <TodoData
   todoList={todoList}
   deleteTodo={deleteTodo}
  />
   :
 
  <div className='todo-image'>
    <img src={reactLogo} className='logo'/>
  </div>
}
</div>
)
}
const App = () => {
 
//props:{key:value}
  return (
   <>
   <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
