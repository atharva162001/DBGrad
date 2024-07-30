function Form({setTodos}){
    const handleSubmit = (event) =>{
        event.preventDefault();
        const value = event.target.todo.value;
        setTodos((prevTodos)=>[
            ...prevTodos,
            {title:value,id:prevTodos.length+1,is_completed:false}
        ])
        event.target.reset();
    }
    return(
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="todo">
                <input type="text"
                name ="todo"
                id="todo"
                placeholder="Enter your task"/>
            </label>
            <button type="submit">
               <b> + </b>
            </button>
        </form>
    )
}

export default Form