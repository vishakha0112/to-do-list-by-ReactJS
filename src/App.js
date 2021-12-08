import "./App.css";
import {Header} from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import React, { useState } from 'react';

function App() {
  const onDelete = (todo)=>{
    console.log("I am ondelete of todo",todo);
    // Deleting this way in react doesnt work 
    // let index=todos.indexOf(todo);
    // todos.splice(index,1);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }
  const [todos,setTodos] = useState([
    {
      sno: 1,
      title: "Go to market",
      desc: "You need to go to the market to get the job 1 done"
    },
    {
      sno: 2,
      title: "Go to mall",
      desc: "You need to go to the mall to get the job 2 done"
    },
    {
      sno: 3,
      title: "Go to ghat",
      desc: "You need to go to the ghat to get the job 3 done"
    }
  ]);
  return (
    <>
      <Header title="My  Todos List"/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
