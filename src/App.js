import React from 'react'
import { connect } from 'react-redux'
import logo from './logo.svg'
import * as evaluateActions from './store/evaluateActions'
import CalculatorScreen from './components/CalculatorScreen'
import Keypad from './components/Keypad'
import './App.css'

export class App extends React.Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
        </header>
        <div className="calculator-container">
          <CalculatorScreen {...this.props} />
          <Keypad {...this.props} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    expression: state.calculator.expression,
    total: state.calculator.total,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    calculate: buttonKey => {
      dispatch(evaluateActions.calculate(buttonKey))
    },
    del: () => {
      dispatch(evaluateActions.deleteLastEntry())
    },
    clear: () => {
      dispatch(evaluateActions.clear())
    },
    evaluate: () => {
      dispatch(evaluateActions.evaluateExpression())
    },
    square: () => {
      dispatch(evaluateActions.square())
    },
    squareRoot: () => {
      dispatch(evaluateActions.squareRoot())
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
