import React from 'react'
import { Textfit } from 'react-textfit'
export default props => {
  return (
    <div className="calculator-screen">
      <Textfit mode="single" max={40} throttle={60} className="screen-top">
        {props.expression}
      </Textfit>
      <Textfit mode="single" max={120} className="screen-bottom">
        {props.total}
      </Textfit>
    </div>
  )
}
