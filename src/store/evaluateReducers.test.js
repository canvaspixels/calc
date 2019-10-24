import * as types from './evaluateTypes'
import evaluateReducers from './evaluateReducers'
import configureMockStore from 'redux-mock-store'

describe('evaulateReducers', () => {
  let store
  let state

  beforeEach(() => {
    state = {
      expression: '1+2',
      total: 3,
    }
  })

  describe('SET_EXPRESSION action type', () => {
    it('sets the expression with a number', () => {
      expect(
        evaluateReducers(state, {
          type: types.SET_EXPRESSION,
          key: '3',
        }),
      ).toEqual({
        expression: '1+23',
        total: 24,
      })
    })
    it('prefixes total if operator other than - is used and the calculator is reset', () => {
      state = {
        expression: '',
        total: 0,
      }
      expect(
        evaluateReducers(state, {
          type: types.SET_EXPRESSION,
          key: '/',
        }),
      ).toEqual({
        expression: '0/',
        total: 0,
      })
    })
    it('', () => {
      state = {
        expression: '4+5--',
        total: 9,
      }
      expect(
        evaluateReducers(state, {
          type: types.SET_EXPRESSION,
          key: '/',
        }),
      ).toEqual({
        expression: '4+5-/',
        total: 9,
      })
    })
  })

  describe('CLEAR_EXPRESSION action type', () => {
    it('clears the expression', () => {
      expect(
        evaluateReducers(state, {
          type: types.CLEAR_EXPRESSION,
          key: 3,
        }),
      ).toEqual({
        expression: '',
        total: 0,
      })
    })
  })

  describe('DELETE_LAST_EXPRESSION_ENTRY action type', () => {
    it('undoes the last entry', () => {
      expect(
        evaluateReducers(state, {
          type: types.DELETE_LAST_EXPRESSION_ENTRY,
        }),
      ).toEqual({
        expression: '1+',
        total: 1,
      })
    })
  })

  describe('EVALUATE_EXPRESSION action type', () => {
    it('evaluates to give a total and clears the expression', () => {
      expect(
        evaluateReducers(state, {
          type: types.EVALUATE_EXPRESSION,
        }),
      ).toEqual({
        expression: '',
        total: 3,
      })
    })
  })

  describe('SQUARE action type', () => {
    it('squares the total', () => {
      state = {
        expression: '4',
        total: 4,
      }
      expect(
        evaluateReducers(state, {
          type: types.SQUARE,
        }),
      ).toEqual({
        expression: '',
        total: 16,
      })
    })
  })

  describe('SQUARE_ROOT action type', () => {
    it('square roots the total', () => {
      state = {
        expression: '4',
        total: 4,
      }
      expect(
        evaluateReducers(state, {
          type: types.SQUARE_ROOT,
        }),
      ).toEqual({
        expression: '',
        total: 2,
      })
    })
  })
})
