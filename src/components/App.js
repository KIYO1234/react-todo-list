import React from "react";
import {useSelector, useDispatch} from 'react-redux'


const App = () => {
  const todos = useSelector(state => state.todos)

  const dispatch = useDispatch()

  const addTask = e => {
    dispatch({type: 'ADDTASK', title: e.target.previousElementSibling.value})
    e.target.previousElementSibling.value = ''
  }

  const deleteList = index => {
    dispatch({type: 'DELETE_LIST', index: index})
  }

  const changeStatus  = index => {
    dispatch({type: 'CHANGESTATUS', index: index})
  }

  return (
    <React.Fragment>
      <h2>Todo List</h2>
      <input></input>
      <button onClick={addTask}>追加</button>
      <ul>
        {todos.map((todo, index) => (
          !todo.isDone ?
            <li key={index}>
              {todo.title}
              <button onClick={() => changeStatus(index)}>進行中</button>
              <button onClick={() => deleteList(index)}>削除</button>
            </li>
          :
            <li key={index}>
              <del>{todo.title}</del>
                <button onClick={() => changeStatus(index)}>完了</button>
                <button onClick={() => deleteList(index)}>削除</button>
            </li>
          ))
        }
      </ul>
    </React.Fragment>
  );
}

export default App
