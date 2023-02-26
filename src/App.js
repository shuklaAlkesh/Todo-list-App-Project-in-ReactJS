import React, { useState } from "react";
import ToDolist from "./toDolist.jsx";

const App = () => {

  const [Inputlist,setInputlist] = useState("");
  const [itemslist,setitemslist] = useState([]);

  const itemEvents = (Events) => {
    console.log(Events.target.value);
    setInputlist(Events.target.value);
  }

  const listOfitems = () => {
    setitemslist((oldData) => {
        return [...oldData,Inputlist];
    });
    setInputlist('');
  };

  const deleteItems = (id) => {

    setitemslist((oldData) => {
        return oldData.filter((arrElement,index) => {
          return index !== id;
        });
    });
  };
  return (
    <>
    <div className="main_div">
      <div className="center_div">
        <h2>👷‍♂️</h2>
        <h1>ToDo List</h1>
        <br/>
        <input 
          type="text"
          placeholder="Add a item"
          onChange={itemEvents}
          value={Inputlist}
        />
        <button onClick={listOfitems}> + </button>
        <br/>
        <ol>
          {/* <li>{Inputlist}</li> */}  
          {itemslist.map((itemsvalue,index) => {
              return <
                ToDolist text = {itemsvalue} 
                id={index} 
                key ={index}
                onSelect={deleteItems}
                />;
          })}
        </ol>
      </div>
    </div>


  </>
  )
}

export default App;