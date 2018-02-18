const INITIAL_STATE = {
  messagesList: []
};

export default function notesReducer(state = INITIAL_STATE, action){
  switch(action.type){
    case 'ADD_MESSAGE':
    case 'MESSAGE_RECEIVED':
      return {...state, messagesList: state.messagesList.concat({
        message: action.payload.message,
        author: action.payload.author,
        id: action.payload.id
      })};
    default:
      return state;
  }
}
