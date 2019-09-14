import {
  combineReducers
} from 'redux';
import getResult from './getResult.js'


export default combineReducers({
  final_result: getResult
})
