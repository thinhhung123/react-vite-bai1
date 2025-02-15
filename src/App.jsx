import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import reactLogo from './assets/react.svg' ;
// () => {} (viết body của arrow function)
const App = () => {
//  function myFunction(){
//   console.log(">>> run my function")
//  }
//react
// const myFunction = () =>{
//   console.log (">>> run my arrow function")
// }
// myFunction();
const name = "Dat";
const age = 22 ;
const data = {
  address: "XuanThoiDong",
  country: 'VietNam'
}

//props:{key:value}
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew/>
      <TodoData
      name={name}
       age ={age}
       data={data}
      />
      <div className='todo-image'>
        <img src={reactLogo} className='logo'/>
      </div>
    </div>
  )
}

export default App
