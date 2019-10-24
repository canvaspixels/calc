import React, { Component } from 'react'
import { keypadKeys } from '../utils/constants'
import Button from './Button'
export default class Keypad extends Component {
  handleClick = key => {
    const { clear, del, evaluate, squareRoot, square, calculate } = this.props
    const keys = {
      c: clear,
      Del: del,
      '=': evaluate,
      '√': squareRoot,
      'x^2': square,
    }
    const chosenKey = keys[key]

    if (chosenKey) {
      chosenKey()
    } else {
      calculate(key)
    }
  }
  render() {
    return (
      <div className="keypad">
        {keypadKeys.map((keypadKey, index) => {
          return (
            <div key={index} className="keypad-key">
              {keypadKey.map(key => (
                <Button key={key} onButtonClick={this.handleClick} buttonKey={key} />
              ))}
            </div>
          )
        })}
      </div>
    )
  }
}
