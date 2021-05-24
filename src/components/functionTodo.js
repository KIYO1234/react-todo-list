import React from 'react'
import {add, remove} from '../actions/index'
import {connect} from 'react-redux'

const FunctionTodo = props => {
    return (
        <React.Fragment>
            <h1>TODO LIST</h1>
            <input></input>
            <button onClick={props.add}>Add</button>
            <ul>
                {props.todos.map((todo, index) => 
                    <li key={index}>{todo.title}
                        <button onClick={() => props.remove(index)}>削除</button>
                    </li>
                )}
            </ul>
        </React.Fragment>
    )
}

// export default FunctionTodo

// mapStateToPropsは関数で定義
// 第一引数にはstate, 中身はこのコンポーネントが欲しいオブジェクトを返す
// storeの値が変わるごとに呼び出される
// 第一引数のstateにはstoreのstateが全部入っている

const mapStateToProps = state => ({
    todos: state.todoReducers.todos,
})

const mapDispatchToProps = dispatch => ({
    add: e => dispatch(add(e)),
    remove: index => dispatch(remove(index)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FunctionTodo)


