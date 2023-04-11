import React from "react";
import {v4 as uuidv4} from "uuid"

export default function Form({input, setInput, todas, setTodas}){

  const OnInputChange = (event) =>{
    setInput(event.target.value)
  }
  const onFormSubmit = (event) =>{
    event.preventDefault()
    setTodas([...todas, {id:uuidv4(), title:input, completed:false}]);
    setInput("")
  }
  return (
    <form action="" onSubmit={onFormSubmit}>
      <input type="text" placeHolder="" value={input} required onChange={OnInputChange} />
      <button className="add_button" type="submit">Add</button>
    </form>
  );
}
