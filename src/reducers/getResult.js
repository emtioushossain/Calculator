import {
  FINAL_RESULT,
  CLICK_REMOVE_BUTTON,
  CLICK_INPUT_BUTTON,
  CLICK_CLEAR_BUTTON
} from '../actions/actionTypes';

const initialState = {
  calculated_value: '',
  history: [],
  input_value: ''
}

export default function(state = initialState, action) {
  switch (action.type) {
    case CLICK_INPUT_BUTTON:
    return {
      ...state,
      input_value: state.input_value.concat(action.payload)
    }
    case FINAL_RESULT:
    console.log(state);
    return {
      ...state,
      calculated_value: action.payload,
      history: state.history.concat(state.calculated_value)
    }
    case CLICK_CLEAR_BUTTON:
    return {
      ...state,
      input_value: action.payload,
      calculated_value: action.payload

    }
    case CLICK_REMOVE_BUTTON:
    return {
      ...state,
      input_value: state.input_value.slice(0, -1)

    }
    default:
    return state

  }

}
