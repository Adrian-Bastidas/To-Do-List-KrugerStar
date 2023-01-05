import React from 'react'
import { useState } from 'react'

const Todo = ({item, onUpdate, onDelete}) => {

    const [isEdit,setisEdit]=useState(false);

    function FormEdit(){
        const [newValue, setNewValue]=useState(item.title);
        function handleSubmit(e){
            e.preventDefault();
        }
        function handleChange(e){
            const value= e.target.value;
            setNewValue(value)
        }
        function handleClick(){
            onUpdate(item.id, newValue);
            setisEdit(false);
        }
        return(
            <form className='todoUpdateForm' onSubmit={handleSubmit}>
                <input type="text" className='todoInput' onChange={handleChange} value={newValue}/>
                <button className='button' onClick={handleClick}>Update</button>
            </form>
        );
    }
    function TodoElement(){
        return(
            <div className='totoInfo'>
            {item.title}
            <button onClick={()=>setisEdit(true)}>Editar</button>
            <button onClick={(e)=>onDelete(item.id)}>Eliminar</button>
            </div>
        )
    }
  return (
    //Renderizado de elementos en lista de forma automatica
    <div className='todo'>
        {isEdit ? <FormEdit/>:<TodoElement/>}

    </div>
  )
}

export default Todo