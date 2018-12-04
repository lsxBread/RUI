import React from 'react'
import { shallow } from './enzyme'
import Button from '../Button'

describe('Button Test', () => {
  it('renders Button Correctly', () => {
    const enzymeWrapper = shallow(
      <Button>Hello World</Button>
    )
    expect(enzymeWrapper.text()).toBe('Hello World')
  })
})