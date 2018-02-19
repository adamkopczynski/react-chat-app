
const INITIAL_STATE = {
  usersList: []
};

export default function notesReducer(state = INITIAL_STATE, action){
  switch(action.type){
    case 'ADD_USER':
      return {...state, usersList: state.usersList.concat({
        name: action.payload.name,
        id: action.payload.id
      })}
    case 'USERS_LIST':
      return {...state, usersList: action.payload.users}
    default:
      return state;
  }
}
