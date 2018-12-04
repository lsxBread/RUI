import React from 'react'
import Button from './Button'
import ButtonGroup from './ButtonGroup'

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Button enableLoading={true}>Hello World</Button>
        <Button icon='settings' enableLoading={true}>Hello</Button>
        <Button icon='settings' iconPosition='right' enableLoading={true}>Hello</Button>
        <ButtonGroup>
          <Button icon='left'>Before</Button>
          <Button>More</Button>
          <Button icon='right' iconPosition='right'>Next</Button>
        </ButtonGroup>
      </React.Fragment>
    )
  }
}

export default App
