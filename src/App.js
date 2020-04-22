import React, { useState } from 'react';
import './App.css';
import Input from "./components/Input";
import OrderedList from './components/OrderedList';

/* class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []

    }
   
  }
  */

  /*handleChange = (inputValue) => {
    this.setState()
  } 
*/

//render() {
const App = () => { 
  let [listValues, updateListValues] = useState([]);
  let updateTasks = newTask => {
    
    updateListValues([...listValues, newTask])
      
  }

  return(
    <div>
      <Input change={updateTasks}  />
      <OrderedList tasks={listValues} />
      
    </div >
  );


}

export default App;
