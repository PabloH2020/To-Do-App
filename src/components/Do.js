import React from 'react';


const Do = (props)=>{

    let {el,setTodos,FilteredTodos} = props;

    const completeHandler = ()=>{
        
       
            setTodos(FilteredTodos.map( obj =>{

                if(obj.id === el.id){
                    return{
                        ...obj,completed:!obj.completed
                    }
                }else{
                    return obj;
                }

            } ))
         
    }

    const deleteHandler = ()=>{
        
            setTodos(FilteredTodos.filter( obj=> obj.id !== el.id ) )
         
    }

    return(
        <div className="pointsToDo">
            
            <li className={`${el.completed ? "completed" : ""}`}>{el.text}</li>
            <button onClick={completeHandler} className="btn btn-success">Mark Completed</button>
            <button onClick={deleteHandler} className="btn btn-danger">Delete</button>
                       
        </div>
    )
}

export default Do