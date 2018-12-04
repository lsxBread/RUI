import React from 'react'
import './scss/ButtonGroup.scss'

const ButtonGroup  = (props) => {
  return (
    <div className='g-button-group'>
      {props.children}
    </div>
  )
}

export default ButtonGroup
