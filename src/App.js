import React from 'react'
import Button from './Button'
import Icon from './Icon'

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Button loading={true} enableLoading={true}>Hello World</Button>
        <Button icon='settings' enableLoading={true}>Hello</Button>
        <Button icon='settings' iconPosition='right' enableLoading={true}>Hello</Button>
      </React.Fragment>
    )
  }
}

export default App
