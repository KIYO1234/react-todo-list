import React from "react"
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {submitToStore} from '../actions/index'
import {useState} from 'react'

const CreateTicket = props => {

    // 入力欄の値
    const [ticketName, setTicketName] = useState('')
    const [detail, setDetail] = useState()
    const [person, setPerson] = useState()
    const [dueDate, setDueDate] = useState()
    const [startDate, setStartDate] = useState()
    
    const inputTicketName = e => {
        setTicketName(() => e.target.value)
    }
    const inputDetail = e => {
        setDetail(() => e.target.value)
    }
    const inputPerson = e => {
        setPerson(() => e.target.value)
    }
    const inputDueDate = e => {
        setDueDate(() => e.target.value)
        console.log(dueDate)
    }
    const inputStartDate = e => {
        setStartDate(() => e.target.value)
    }

    return (
        <React.Fragment>
            <h1>チケット作成（Todo作成）</h1>
            <ul id="details">
                <li>チケット名<input type='text' onChange={inputTicketName} value={ticketName}></input></li>
                <li>詳細 <textarea onChange={inputDetail} value={detail}></textarea></li>
                <li>担当者 <input onChange={inputPerson} vlaue={person}></input></li>
                <li>期日 <input type="date" onChange={inputDueDate} vlaue={dueDate}></input></li>
                <li>開始日 <input type="date" onChange={inputStartDate} vlaue={startDate}></input></li>
            </ul>
            <button>
                <Link to="/">ホーム画面へ戻る</Link>
            </button>

            <button onClick={() => props.submitToStore(ticketName, detail, person, dueDate, startDate)}>
                <Link to='/'>チケットを作成</Link>
            </button>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    tickets: state.ticketReducers.tickets,
})
const mapDispatchToProps = dispatch => ({
    submitToStore: (ticketName, detail, person, dueDate, startDate) => dispatch(submitToStore(ticketName, detail, person, dueDate, startDate)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateTicket)