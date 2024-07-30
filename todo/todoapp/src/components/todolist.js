import React from "react"
function TODOList({todos,setTodos}){
    return (
        <ol className="todo_list">{
            todos && todos.length>0?(todos?.map((item,index)=> <Item key={index} item={item} setTodos={setTodos}/>)):
            (<p>Task list empty.</p>)
        }</ol>
    )
}


function Item({item,setTodos}){
    const [editing,setEditing] = React.useState(false)
    const inputRef = React.useRef(null)
    const  handleEdit = ()=>{
        setEditing(true)
    }

    const handleInputBlur = () => {
        setEditing(false)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setEditing(false)
    }

    React.useEffect(()=>{
        if(editing&&inputRef.current){
            inputRef.current.focus();
            inputRef.current.setSelectionRange(
                inputRef.current.value.length,
                inputRef.current.value.length,
            )
        }
    },[editing])

    const handleInputChange = (e)=>{
        setTodos((prevTodos)=> prevTodos.map((todo)=>todo.id===item.id?{...todo, title:e.target.value}:todo))
    }

    const completeTodo = () =>{
        setTodos((prevTodos)=> prevTodos.map((todo)=> todo.id===item.id?{
            ...todo,is_completed:!todo.is_completed}:todo
        ))
    }

    const handleDelete = () => {
        setTodos((prevTodos)=>prevTodos.filter((todo)=>todo.id !== item.id))
    }

    return(
            <li className="todo_item" id={item?.id}>
                {editing?(
                    <form className="edit-form" onSubmit={handleSubmit}>
                        <label htmlFor="edit-todo">
                            <input ref={inputRef} name="edit-todo"
                            id="edit-todo" defaultValue={item?.title}
                            onBlur={handleInputBlur}
                            onChange = {handleInputChange}
                            />
                        </label>
                    </form>

                ):(
                    <div>
            <div className="todos_items_left">
            <input type="Checkbox" checked={item?.is_completed} onClick={completeTodo}/>
                <p>{item?.title}</p>
            </div>
            <div className="todos_items_right">
                <button onClick={handleEdit}>
                    Edit</button> 
                <button onClick={handleDelete}>
                Delete</button>           
            </div>
            </div>)}

        </li>
    )
}

export default TODOList;