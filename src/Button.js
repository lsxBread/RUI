import React from 'react'
import PropTypes from 'prop-types'
import Icon from './Icon'
import './scss/Button.scss'

const Button = (props) => {
  const { icon, iconPosition } = props
  return (
    <button className={`g-button icon-${iconPosition}`}>
      <Icon className='loading' name='loading' />
      {
        props.icon &&
        <Icon className="icon" name={icon} />
      }
      <div className='content'>
        {props.children}
      </div>
    </button>
  )
}

Button.propTypes = {
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left', 'right'])
}

Button.defaultProps = {
  iconPosition: 'left'
}

export default Button
