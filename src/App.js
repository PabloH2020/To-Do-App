import './App.css';
import {React, useState, useEffect} from 'react';
import Form from './components/Form';
import ToDo from './components/ToDo';

function App() {

  const [inputText,setInputText] = useState("");
  const [todos,setTodos] = useState([]);
  const [status,setStatus] = useState("All");
  const [FilteredTodos,setFilteredTodos] = useState([]);

  //using useEffect i execute the function filterHandler anytime the 'todos' or the 'status' lists change
  useEffect( ()=>{ filterHandler() } , [todos,status] )

  const filterHandler = ()=>{
    switch(status){
      case "completed":
        setFilteredTodos( todos.filter( todo=> todo.completed ==true ) )
      break
      case "incomplete":
        setFilteredTodos( todos.filter( todo=> todo.completed ==false ) )
      break
      default:
        setFilteredTodos( todos )
      break
    }
  }

  return (
    <div className="App">
      <header>
      <h1>Pablo's To-Do List</h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus} />
      <ToDo FilteredTodos={FilteredTodos} todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
