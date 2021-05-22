
import {createStore} from 'redux'

const initialState = {
    todos: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case "ADDTASK":
        return {
            todos: [...state.todos,{title: action.title, isDone: false}]
        };

    case "DELETE_LIST":
        const removedTodos = [...state.todos]
        removedTodos.splice(action.index, 1)
        return {
            todos: removedTodos
        };

    case "CHANGESTATUS":
        state.todos[action.index].isDone = !state.todos[action.index].isDone

        return {
            todos: [...state.todos]
        };

    default:
      return state;
  }
};
const store = createStore(reducer)

export default store