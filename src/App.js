import React from 'react';
import './App.css';
import { useState } from 'react';
function App() {
  const [toDos, setTodos] = useState([])
  const [toDo, setTodo] = useState('')
  
  return (
    <div >
      <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input type="text"  value={toDo} onChange={(e)=>setTodo(e.target.value)}placeholder="🖊️ Add item..." />
        <i onClick={()=>setTodos([...toDos,{id:Date.now(),text:toDo,status:false}])}className="fas fa-plus" ></i>
      </div>
      <div className="todos">
        {
          toDos.map((obj)=>{
            return(
          
        <div className="todo">
          <div className="left">
            <input type="checkbox" onChange={(e)=>{
            console.log(e.target.value)
            console.log(obj)
            setTodos(toDos.filter(obj2=>{
              if(obj2.id===obj.id){
                obj2.status=e.target.checked
              }
              return obj2
              }))
            } } value={obj.status}name="" id="" />
            <p>{obj.text}</p>
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>)
        })
}
      </div>
    </div>
      
    </div>
  );
}

export default App;
