import React from "react"
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteTicket} from '../actions/index'

const RouterTodo = props => {
    return (
        <React.Fragment>
            <h1>Todo一覧画面</h1>
            <table>
                <thead>
                    <tr>
                        <th>チケット名</th>
                        <th>担当者</th>
                    </tr>
                </thead>
                <tbody>
                    {props.tickets.map((ticket , index) => (
                        <tr key={index}>
                            
                                <td>{ticket.ticketName}</td>
                                <td>{ticket.person}</td>
                                <td>
                                    <button><Link to={`/individual/${index}`}>編集</Link></button>
                                    <button onClick={() => props.deleteTicket(index)}>削除</button>
                                </td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
            <button><Link to='/ticket'>新規チケット作成</Link></button>
            <button><Link to='/details'>詳細一覧へ</Link></button>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    tickets: state.ticketReducers.tickets,
})

const mapDispatchToProps = dispatch => ({
    deleteTicket: index => dispatch(deleteTicket(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(RouterTodo)
