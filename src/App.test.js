import React from 'react'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import { App } from './App'
import jest from 'jest-mock'

configure({
  adapter: new Adapter(),
})

describe('<App />', () => {
  let wrapper = mount(<App />)

  beforeEach(() => {
    wrapper.setProps({
      evaluate: jest.fn(),
      del: jest.fn(),
      calculate: jest.fn(),
      clear: jest.fn(),
    })
  })

  it('mounts and renders app without errors', () => {
    mount(<App />)

    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('calls the calculate action on keypad number click', () => {
    wrapper.find('button[data-qa="4"]').simulate('click')
    expect(wrapper.prop('calculate').mock.calls.length).toBe(1)
    expect(wrapper.prop('calculate').mock.calls[0][0]).toBe('4')

    expect(wrapper.prop('del').mock.calls.length).toBe(0)
    expect(wrapper.prop('clear').mock.calls.length).toBe(0)
  })

  it('calls del when Del is clicked', () => {
    wrapper.find('button[data-qa="Del"]').simulate('click')
    expect(wrapper.prop('del').mock.calls.length).toBe(1)
  })

  it('calls del when Del is clicked', () => {
    wrapper.find('button[data-qa="Del"]').simulate('click')
    expect(wrapper.prop('del').mock.calls.length).toBe(1)
  })
})
