const INITIAL_STATE = {
  x: '1'
};

export default function notesReducer(state = INITIAL_STATE, action){
  switch(action.type){
    case 'ADD_USER':
      return state;
    default:
      return state;
  }
}
