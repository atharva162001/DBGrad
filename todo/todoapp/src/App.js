import './styles/styles.css'
import Form from './components/Form';
import Header from './components/Header';
import TODOHero from './components/todohero';
import TODOList from './components/TODOlist';
import React from 'react';

function App() {
  const [todos,setTodos] = React.useState([
    { id: 1, title: 'Todo 1', is_completed: false },
    { id: 2, title: 'Todo 2', is_completed: true },
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