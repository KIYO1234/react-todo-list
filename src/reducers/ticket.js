import {SUBMITTOSTORE, DELETETICKET} from '../actions/index'

const initialState = {
    tickets: [
        {
            ticketName: '会議', 
            detail: '今後の方針について',
            person: '佐藤',
            dueDate: "2021-06-01",
            startDate: "2021-06-03",
        }
    ]
}
export const ticketReducers = (state = initialState, action) => {
    switch(action.type){
        case SUBMITTOSTORE:
            // console.log(action)
            console.log(state.tickets)
            return {
                tickets: [...state.tickets, {
                    ticketName: action.ticketName, 
                    detail: action.detail,
                    person: action.person,
                    dueDate: action.dueDate,
                    startDate: action.startDate,
                }]
            }
        case DELETETICKET:
            console.log(action)
            console.log(state)
            const removedTickets = [...state.tickets]
            removedTickets.splice(action.index, 1)
            return {
                tickets: removedTickets
            }
        default:
            return state
    }
}