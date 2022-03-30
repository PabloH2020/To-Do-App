import React from 'react';
import Do from './Do';

const ToDo = ({todos,setTodos,FilteredTodos})=>{



    return(
        <div>
            { FilteredTodos.map(el=> (<Do setTodos={setTodos} FilteredTodos={FilteredTodos} el={el} />) ) }   
        </div>
    )
}

export default ToDo