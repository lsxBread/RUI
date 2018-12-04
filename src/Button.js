import React from 'react'
import PropTypes from 'prop-types'
import './scss/Button.scss'

const Button = (props) => {
  const { icon, iconPosition } = props
  return (
    <button className={`g-button icon-${iconPosition}`}>
      {
        props.icon &&
        <svg className="icon" aria-hidden="true">
          <use xlinkHref={`#i-${icon}`} />
        </svg>
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
