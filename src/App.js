import React from 'react'
import Button from './Button'
import Icon from './Icon'

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Button>Hello World</Button>
        <Button icon='settings'>Hello</Button>
        <Button icon='settings' iconPosition='right'>Hello</Button>
        <Icon name='right' />
      </React.Fragment>
    )
  }
}

export default App
