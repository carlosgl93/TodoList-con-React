import React, { useState, useEffect } from 'react';
import './App.css';
import Input from "./components/Input";
import OrderedList from './components/OrderedList';

const urlApi = "https://jsonplaceholder.typicode.com";

const getPosts = () => {
  fetch(`${urlApi}/posts`)
    .then((resp) => resp.json())
    .then((response) => {

      console.log(response)
    })
  return () => {
    console.log("vacio estoy");
    return

  }
}

const postTask = (taskTitle, body, user) => {

  
  fetch(`${urlApi}/posts`, {
    method: "Post",
    body: JSON.stringify({
      title: taskTitle,
      body: body,
      userID: user
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => {
    console.log("JSON:", json)
    return json
  })
  
}



const App = () => { 
  let [listValues, updateListValues] = useState([]);
  let updateTasks = newTask => {
    
    updateListValues([...listValues, newTask])
      
  }

  

  useEffect( () => {
    console.log("listvalues[0]", listValues[0])
    console.log("listvalues[listValues.length]", listValues[listValues.length-1])
    let myPosts = postTask(listValues.slice(-1))
    console.log("myPosts", myPosts)
  })



  return(
    <div>
      <Input change={updateTasks}  />
      <OrderedList tasks={listValues}  />
      
    </div >
  );


}

export default App;
