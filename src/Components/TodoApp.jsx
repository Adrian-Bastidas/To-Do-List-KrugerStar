import React, {useState} from 'react'
import Todo from './Todo';

const TodoApp = () => {
    const [title, setTitle]=useState("Hola");
    const [todos,settodos]=useState([]);

    function handleChange(event){
        const value= event.target.value;
        setTitle(value)
    }
    function handleSubmit(e){
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
    function handleUpdate(id, value){
        const temp=[...todos]
        const item=temp.find((item)=> item.id === id);
        item.title=value;
        settodos(temp);
    }
    function handleDelete(id){
        const temp=todos.filter(item=>item.id!==id);

        settodos(temp);
    }
  return (
    <div className='container'>
        <form className='createForm' onSubmit={handleSubmit}>
            <input onChange={handleChange} className='tInput' value={title}/>
            <input 
            onClick={handleSubmit}
            type="submit" 
            value="Create todo" 
            className='buttonCreate'/>
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