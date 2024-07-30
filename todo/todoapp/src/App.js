import './styles/styles.css'
import Form from './components/Form';
import Header from './components/Header';
import TODOHero from './components/todohero';
import TODOList from './components/todolist';
import React from 'react';

function App() {
  const [todos,setTodos] = React.useState([
    {title:"Wake up 6 AM", id:1,is_completed:false},
    {title:"Do Excercise", id:2,is_completed:true},
    {title:"Start Learning React", id:3,is_completed:false}
  ])

  const todos_completed = todos.filter((todo)=> todo.is_completed===true).length
  const total_todos = todos.length
  return (
    <div className="wrapper">
      <br/>
      <br/>
      <Header title="Todo Task App"/>  
      <TODOHero todos_completed={todos_completed} total_todos={total_todos}/>
      <Form setTodos={setTodos}/>
      <TODOList setTodos={setTodos} todos={todos}/>  
    </div>
  );
}

export default App;