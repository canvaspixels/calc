import * as types from './evaluateTypes'
import evaluate from '../utils/evaluate'
import { createReducer } from '../utils/redux'

let initialState = {
  expression: '',
  total: 0,
}

export default createReducer(initialState, {
  [types.SET_EXPRESSION]: (state, action) => {
    let expression = state.expression
    if (/[\d]*[-+%*/.]$/.exec(expression) && /[-+%*/.]/.exec(action.key)) {
      expression = state.expression.slice(0, expression.length - 1)
    }

    if (['+', '/', '*', '%'].includes(action.key) && (!expression || expression === `0${action.key}`)) {
      expression = `${state.total}${action.key}`
    } else {
      expression = `${!expression && state.total ? state.total : ''}${expression + action.key}`
    }

    return {
      ...state,
      expression,
      total: evaluate(expression) || state.total,
    }
  },
  [types.CLEAR_EXPRESSION]: state => ({
    ...state,
    expression: '',
    total: 0,
  }),
  [types.DELETE_LAST_EXPRESSION_ENTRY]: state => {
    let exp = state.expression
    exp = exp
      .split('')
      .slice(0, exp.length - 1)
      .join('')
    return {
      ...state,
      expression: exp,
      total: evaluate(exp),
    }
  },
  [types.EVALUATE_EXPRESSION]: state => ({
    ...state,
    expression: '',
    total: evaluate(state.expression) || state.expression || state.total,
  }),
  [types.SQUARE]: state => ({
    ...state,
    expression: '',
    total: state.expression * state.expression,
  }),
  [types.SQUARE_ROOT]: state => ({
    ...state,
    expression: '',
    total: Math.sqrt(state.expression),
  }),
})
