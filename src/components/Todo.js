import React, { Component } from 'react'

class Todo extends React.Component {
  render() {
    const { todo = 'Hello World' } = this.props

    return <span>{todo}</span>
  }
}

export default Todo
