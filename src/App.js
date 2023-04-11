import React,{useState} from "react";
import "./style.css";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList"


export default function App() {
  
  const [input, setInput] = useState()
  const [todas, setTodas] = useState([])

  return (
    <>
    <div className="container">
      <div className="app_container">
        <div>
           <Header/>
        </div>
        <div>
           <Form 
             input={input}
             setInput={setInput}
             todas={todas}
             setTodas={setTodas}
           />
        </div>
        <TodoList  todas={todas} setTodas={setTodas} />
      </div>
    </div>
    </>
  );
}
