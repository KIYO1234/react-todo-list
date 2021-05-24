
import React, {useState} from "react"
import {Link,useParams,} from 'react-router-dom'
import {connect} from 'react-redux'
import {submitToStore} from '../actions/index'
 

export const Individual = props => {
    const {id} = useParams()
    
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
    }
    const inputStartDate = e => {
        setStartDate(() => e.target.value)
    }
    
    const selectedTicket = props.tickets.filter((ticket, index) => index === Number(id)
    )
    console.log(selectedTicket);
    console.log(selectedTicket[0].ticketName);
    

    
    return (
        <React.Fragment>
            <h1>詳細（個別）</h1>

            <ul id="details">
                <React.Fragment>
                    <li>チケット名:<input type='text' onChange={inputTicketName} value={selectedTicket[0].ticketName}></input></li>
                    <li>詳細 <textarea onChange={inputDetail} value={selectedTicket[0].detail}></textarea></li>
                    <li>担当者 <input onChange={inputPerson} value={selectedTicket[0].person}></input></li>
                    <li>期日 <input type="date" onChange={inputDueDate} value={selectedTicket[0].dueDate}></input></li>
                    <li>開始日 <input type="date" onChange={inputStartDate} value={selectedTicket[0].startDate}></input></li>
                </React.Fragment>
            </ul>
            <button>
                <Link to="/">ホーム画面へ戻る</Link>
            </button>

            <button onClick={() => props.submitToStore(ticketName, detail, person, dueDate, startDate)}>
                <Link to='/'>チケットを編集</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(Individual)