import React from "react";

const toDolist = (props) => {
    return (
    <>
    <div className = "todo_style">
        <i className=" fa fa-times"
         onClick={()=>{
            props.onSelect(props.id);
         }} />
        <li>{props.text}</li> 
    </div>
    </>
)};

export default toDolist;