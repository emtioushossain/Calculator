import {
  FINAL_RESULT,
  CLICK_REMOVE_BUTTON,
  CLICK_INPUT_BUTTON,
  CLICK_CLEAR_BUTTON
} from '../actions/actionTypes';

const initialState = {
  calculatedValue: '',
  history: [],
  inputValue: ''
}

export default function(state = initialState, action) {
  switch (action.type) {
    case CLICK_INPUT_BUTTON:
    return {
      ...state,
      inputValue: state.inputValue.concat(action.payload)
    }
    case FINAL_RESULT:
    return {
      ...state,
      calculatedValue: action.payload,
      history: state.history.concat(state.calculatedValue)
    }
    case CLICK_CLEAR_BUTTON:
    return {
      ...state,
      inputValue: action.payload,
      calculatedValue: action.payload

    }
    case CLICK_REMOVE_BUTTON:
    return {
      ...state,
      inputValue: state.inputValue.slice(0, -1)

    }
    default:
    return state

  }

}
