import React, {useState} from 'react'

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
    }
  return (
    <div className='cointainer'>
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
                    <div key={item.id}>{item.title}</div>//Renderizado de elementos en lista de forma automatica
                ))
            }
        </div>
    </div>
  )
}

export default TodoApp