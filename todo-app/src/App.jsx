import React from 'react';

const App = () => {
  let [isCompleteScreen,setIscompleteScreen] = useState(fale);
  let [allTodos,setTodos] = useState([]);
  let [newTitle,setNewTitle] = useState("");
  let [newDescription,setNewDescription] = useState("");
  function handleAddTodo(){
    let newTodoItem = {
      title : newTitle,
      desriptin : newDescription
    }

    let updateTodoAdd = [...allTodos];
    updateTodoAdd.push(newTodoItem);
    setTodos(updateTodoAdd);
  }
  return (
    <div>
      <h1>My Todos</h1>
      <div className="todo-wrapper">
        <div className='todo-input'>

          <div className='todo-input-item'>
            <label className='label'>Title</label>
            <input className='text' type="text" value={newTitle} onChange={(e)=> {setNewTitle(e.target.value)}} placeholder='Enter your works' />
          </div>

          <div className='todo-input-item'>
            <label className='label'>Description</label>
            <input value={newDescription} onChange={(e)=> {setNewDescription(e.target.value)}} className='text' type="text" placeholder='Enter Description' />
          </div>

          <div className='todo-input-item'>
            <button type='button' onClick={handleAddTodo} className='primary-button'>Add</button>
          </div>
        </div>

        <div className="todo-output">

          <div className="button-area">
            <button className={`output-button1 isCompleteScreen ${isCompleteScreen === false && 'active'}`} onClick={setIscompleteScreen(false)}>Todo</button>

            <button className={`output-button2 isCompleteScreen ${isCompleteScreen === true && 'active'}`} onClick={setIscompleteScreen(true)}>Completed</button>
          </div>

          <div className="todo-list">
            {
              allTodos.map((item,index) => {
                return (
                  <div className='todo-list-item' key={item}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;