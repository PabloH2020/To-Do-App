import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fas);

const Form = ({inputText,setInputText,todos,setTodos,setStatus})=>{

    const inputTextHandler = (e)=>{
        
        setInputText(e.target.value);
    }
    const submitHandler = (e)=>{
        e.preventDefault();

        setTodos([
            ...todos,
            {text:inputText,id:Math.random()*1000,completed:false }
        ])

        setInputText("");
    }

    const statusHandler=(e)=>{
        setStatus(e.target.value);
        console.log(e.target.value)
    }

    return(
        <form ClassName="miform">
            <input value={inputText} onChange={ inputTextHandler } type="text"></input>
            <button onClick={submitHandler}>
            <FontAwesomeIcon icon="fas fa-square-plus" />
            </button>
            <div>
                <select name="todos" onChange={statusHandler} >
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="incomplete">Incomplete</option>
                </select>
            </div>
        </form>
    )
}

export default Form