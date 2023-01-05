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
            <form className='createForm' onSubmit={handleSubmit}>
                <input type="text" className='todoInput' onChange={handleChange} value={newValue}/>
                <button className='button-udpate' onClick={handleClick}><img src="./Images/update.png" className='fotos'/></button>
            </form>
        );
    }
    function TodoElement(){
        return(
            <div className='totoInfo'>
                <div className='texto'>
            {item.title}
            </div>
            <button onClick={()=>setisEdit(true)} className="editar"><img src="./Images/edit.png" className='fotos'/></button>
            <button onClick={(e)=>onDelete(item.id)} className="eliminar"><img src="./Images/delete.png" className='fotos'/></button>
            </div>
        )
    }
  return (
    //Renderizado de elementos en lista de forma automatica
    <div className='createForm, elementos'>
        {isEdit ? <FormEdit/>:<TodoElement/>}

    </div>
  )
}

export default Todo