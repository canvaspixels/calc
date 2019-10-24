import React from 'react'
import { operators, specialOperators } from '../utils/constants'

export default ({ onButtonClick, buttonKey }) => {
  let handleClick = () => {
    onButtonClick(buttonKey)
  }
  let classNames = ['btn', operators.includes(buttonKey) ? 'btn--operator' : '', specialOperators.includes(buttonKey) ? 'btn--misc' : '', buttonKey === '0' ? 'btn--zero' : '']

  return (
    <button data-qa={buttonKey} className={classNames.join(' ').trim()} onClick={handleClick}>
      {buttonKey === '*' ? 'x' : buttonKey}
    </button>
  )
}
