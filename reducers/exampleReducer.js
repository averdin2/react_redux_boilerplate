import { EXAMPLE_ACTON_TYPE } from '../actions/types';

const initialState = {
  example: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case EXAMPLE_ACTON_TYPE:
      return {
        ...state,
        example: action.payload
      };
    default:
      return state;
  }
}