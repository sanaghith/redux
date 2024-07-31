import { DECREMENT, INCREMENT } from "../actions/Type";

//initial state
const initialState = {
  counter: 0,
};

// Use the initialState as a default value
export default function counterReducer(state = initialState.counter , action) {
  switch (action.type) {
    case INCREMENT:
        return state + 1;
    case DECREMENT:
        return state - 1;
      
    default:
      return state;
  }
}
