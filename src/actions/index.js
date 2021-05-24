
export const ADD = 'add'
export const add = e => {
 return {
     type: ADD,
     title: e.target.previousElementSibling.value
 }   
}
export const REMOVE = 'remove'
export const remove = index => {
 return {
     type: REMOVE,
     index: index
 }   
}

// router
export const SUBMITTOSTORE = 'submitToStore'
export const submitToStore = 
    (ticketName, detail, person, dueDate, startDate) => 
    {
        return {
            type: SUBMITTOSTORE,
            ticketName: ticketName, 
            detail: detail,
            person: person,
            dueDate: dueDate,
            startDate: startDate,
        }
    }

export const DELETETICKET = 'deleteTicket'
export const deleteTicket = index => {
    return {
        type: DELETETICKET,
        index: index
    }
}
