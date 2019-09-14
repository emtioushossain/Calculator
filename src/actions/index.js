import {
  FINAL_RESULT,
  CLICK_REMOVE_BUTTON,
  CLICK_INPUT_BUTTON,
  CLICK_CLEAR_BUTTON
} from '../actions/actionTypes';


export const calculateInput = (buttonValue) => {
  try {
    buttonValue = eval(buttonValue)
  } catch (error) {
    buttonValue = ''
  }

  console.log(buttonValue);
  return {
    type: FINAL_RESULT,
    payload: buttonValue
  }

}

export const receiveInput = (buttonValue) => {
  return {
    type: CLICK_INPUT_BUTTON,
    payload: buttonValue
  }

}

export const clearInput = (buttonValue) => {
  return {
    type: CLICK_CLEAR_BUTTON,
    payload: buttonValue
  }

}

export const clearLastInput = (buttonValue) => {
  return {
    type: CLICK_REMOVE_BUTTON,
    payload: buttonValue
  }

}
