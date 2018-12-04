import React from 'react'
import PropTypes from 'prop-types'
import Icon from './Icon'
import './scss/Button.scss'

class Button extends React.Component {
  constructor () {
    super()
    this.state = {
      loading: false
    }
  }
  render () {
    const { icon, iconPosition, enableLoading, children } = this.props
    const { loading } = this.state
    return (
      <button className={`g-button icon-${iconPosition}`} onClick={() => this.setState({loading: !loading})}>
        {
          enableLoading && loading &&
          <Icon className='loading icon' name='loading' />
        }
        {
          ((icon && enableLoading && !loading) || (icon && !enableLoading)) &&
          <Icon className="icon" name={icon} />
        }
        <div className='content'>
          {children}
        </div>
      </button>
    )
  }
}

Button.propTypes = {
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  enableLoading: PropTypes.bool
}

Button.defaultProps = {
  iconPosition: 'left',
  loading: false
}

export default Button
