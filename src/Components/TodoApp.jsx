import React, {useState} from 'react'
import Todo from './Todo';

const TodoApp = () => {
    const [title, setTitle]=useState("");
    const [todos,settodos]=useState([]);

    function handleChange(event){
        const value= event.target.value;
        setTitle(value)
    }
    function handleSubmit(e){
        if(title!=""){
            e.preventDefault();

            const newTodo={
                id: crypto.randomUUID(),
                title:title,
                completed: false
            }
    
            const temp=[...todos];
            temp.unshift(newTodo);
            settodos(temp)
            setTitle('')
        }
        else{
            e.preventDefault();

            const newTodo={
                id: crypto.randomUUID(),
                title:"Aqui tienes una nota vacia, puedes editarla cuando quieras",
                completed: false
            }
    
            const temp=[...todos];
            temp.unshift(newTodo);
            settodos(temp)
            setTitle('')
        }

    }
    function handleUpdate(id, value){
        if(value!=""){
            const temp=[...todos]
            const item=temp.find((item)=> item.id === id);
            item.title=value;
            settodos(temp);
        }
        else{
            const temp=[...todos]
            const item=temp.find((item)=> item.id === id);
            item.title="Aqui tienes una nota vacia, puedes editarla cuando quieras";
            settodos(temp);
        }

    }
    function handleDelete(id){
        const temp=todos.filter(item=>item.id!==id);

        settodos(temp);
    }
  return (
    <div className='container'>
        <form className='createForm' onSubmit={handleSubmit}>
            <input onChange={handleChange} className='tInput' placeholder="Escribe aqui tu siguiente tarea" value={title}/>
            <button 
            onClick={handleSubmit}
            type="submit" 
            className='buttonCreate'><img src="./Images/create.png" className='fotos'/></button>
        </form>
        <div className='todosContainer'>
            {
                todos.map(item=>(
                    <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete}/>
                ))
            }
        </div>
    </div>
  )
}

export default TodoApp