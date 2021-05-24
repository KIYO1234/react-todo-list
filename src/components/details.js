import React from "react"
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const DetailList = props => {
    return (
        <React.Fragment>
            <h1>Todo一覧画面</h1>
            <table>
                <thead>
                    <tr>
                        <th>チケット名</th>
                        <th>詳細</th>
                        <th>担当者</th>
                        <th>締切</th>
                        <th>開始日</th>
                    </tr>
                </thead>
                <tbody>
                    {props.tickets.map((ticket , index) => (
                    <tr key={index}>
                        <td>{ticket.ticketName}</td>
                        <td>{ticket.detail}</td>
                        <td>{ticket.person}</td>
                        <td>{ticket.dueDate}</td>
                        <td>{ticket.startDate}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
            <button><Link to='/ticket'>ホーム画面へ戻る</Link></button>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    tickets: state.ticketReducers.tickets,
})
// const mapDispatchToProps = dispatch => ({
//     submitToStore: (ticketName, detail, person, dueDate, startDate) => dispatch(submitToStore(ticketName, detail, person, dueDate, startDate)),
// })

// export default connect(mapStateToProps, mapDispatchToProps)(RouterTodo)
export default connect(mapStateToProps)(DetailList)

// export default RouterTodo