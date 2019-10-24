import * as types from './evaluateTypes'
import { makeActionCreator } from '../utils/redux'

export const calculate = makeActionCreator(types.SET_EXPRESSION, 'key')
export const clear = makeActionCreator(types.CLEAR_EXPRESSION)
export const square = makeActionCreator(types.SQUARE)
export const squareRoot = makeActionCreator(types.SQUARE_ROOT)
export const deleteLastEntry = makeActionCreator(types.DELETE_LAST_EXPRESSION_ENTRY)
export const evaluateExpression = makeActionCreator(types.EVALUATE_EXPRESSION)
