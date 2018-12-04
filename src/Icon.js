import React from 'react'
import PropTypes from 'prop-types'
import './scss/Icon.scss'

const Icon = (props) => {
  return (
    <svg className={`g-icon ${props.className}`} aria-hidden="true">
      <use xlinkHref={`#i-${props.name}`} />
    </svg>
  )
}

Icon.propTypes = {
  name: PropTypes.string
}

export default Icon
