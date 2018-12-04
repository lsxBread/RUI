import React from 'react'
import PropTypes from 'prop-types'
import './scss/ButtonGroup.scss'

class ButtonGroup extends React.Component {
  render () {
    return (
      <div className='g-button-group'>
        {this.props.children}
      </div>
    )
  }
}

ButtonGroup.propTypes = {
  children: (props, propName, componentName) => {
    const prop = props[propName]
    let error = null
    React.Children.forEach(prop, (child) => {
      if (child.type.name !== 'Button') {
        error = new Error('`' + componentName + '` children should be of type `Button`.');
      }
    })
    return error
  }
}

export default ButtonGroup
