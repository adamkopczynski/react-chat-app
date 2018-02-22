
const INITIAL_STATE = {
  usersList: [],
  myId: 0
};

export default function notesReducer(state = INITIAL_STATE, action){
  switch(action.type){
    case 'ADD_USER':
      return {...state, usersList: state.usersList.concat({
        name: action.payload.name,
        id: action.payload.id
      }), myId: action.payload.id}
    case 'CHANGE_USERNAME':
      return{...state, userList: state.userList.map(
        user => {
          user.name = user.id === state.myId ? action.payload.name : user.name
        }
      )}
    case 'USERS_LIST':
      return {...state, usersList: action.payload.users}
    default:
      return state;
  }
}
