// State argument is note application state, only the state
// this reducer is responsible for
export default function (state, action) {
  switch(action.type) {
    case 'BOOKSELECTED':
    return action.payload;
  }
  
  return state;
}