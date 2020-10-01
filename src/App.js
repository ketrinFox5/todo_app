import React, { useState, useRef } from 'react';
import ToDoItem from './ToDoItem/index';
import CurrentDate from './CurrentDate/index';
import './main.scss';

const App = () => {
  const todoData = JSON.parse(localStorage.getItem('todos')) || [];
  const [todos, setTodos] = useState(todoData);
  const [inputValue, setValue] = useState();
  const [currentText, editText] = useState('');
  const inputRef = useRef();

  const handleChange = id => {
   const newTodos = todos.map(item => {
     return item.id === id ? {...item, isCheck: !item.isCheck} : item;
   })
   setTodos(newTodos);
   localStorage.setItem('todos', JSON.stringify(newTodos));
  }
  const activeTasks = todos.filter(task => task.isCheck=== false);
  const completedTasks = todos.filter(task => task.isCheck === true);
  const finalTasks = [...activeTasks, ...completedTasks].map(item => {
    return(
        <ToDoItem
        key= {item.id}
        description = {item.text}
        completed={item.isCheck}
        handleChange={()=>handleChange(item.id)}
        handleDelete = {()=>deleteItem(item.id)}
        handleEdit = {()=>handleEdit(item)}
        currentText = {currentText}
    />
    )
    
  })
  const addItem = () => {
    const newItem = {
      id: Math.random()*100000000,
      text: inputValue,
      isCheck: false
    }
    const newTodos = [newItem, ...todos];
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
    setValue('');
  }

  const deleteItem = id => {
    const newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);  
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }
  const handleInput = ()=> {
    const value = inputRef.current.value;
    setValue(value);
  }

  const handleEdit = item => {
    editText(item.text);
    
  }
  return (
    <div className="App">
      <div className="App-wrap">
        <div className="todo-wrap">
          <CurrentDate/>
          <div className="todo-content">
          {finalTasks}
          </div>
        </div>
        <div className="todo-add-wrap">
            <div className="todo-add-item">
            <label htmlFor="todoAdd" className="label">Добавить дело</label>
            <input 
              onChange={handleInput} 
              type="text"
              id="todoAdd" ref={inputRef}
              value={inputValue}
            />
            <button onClick={addItem} disabled={!Boolean(inputValue)}>Добавить</button>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
