import * as types from '../constans/ActionTypes'

let nextMessageId = 0
let nextUserId = 0

export const addMessage = (message, author) => {
  type: types.ADD_MESSAGE,
  payload: {
    id, nextMessageId++,
    author,
    message
  }
}

export const addUser = name => {
  type: types.ADD_USER,
  payload: {
    id: nextUserId++,
    name
  }
}

export const messageReceived = ( message, author) => {
  type: types.MESSAGE_RECEIVED,
  payload:{
    id: nextMessageId++,
    message,
    author
  }
}

export const usersList = users => {
  type: types.USERS_LIST,
  payload: {
    users
  }
}
