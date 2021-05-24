
import {combineReducers} from 'redux'

import {todoReducers} from './todo'
import {ticketReducers} from './ticket'

export default combineReducers({todoReducers, ticketReducers})