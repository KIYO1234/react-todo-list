
import {ADD, REMOVE} from '../actions/index'

const initialState = {
    todos: []
}
export const todoReducers = (state=initialState, action) => {
    switch(action.type){
        case ADD:
            console.log(state)
            console.log(action)
            return {
                todos: [...state.todos, {title: action.title}]
            }
        case REMOVE:
            const removedTodos = [...state.todos]
            removedTodos.splice(action.index, 1)
            return {
                todos: removedTodos
            }
        default:
            return state
    }
}

// export default todoReducers