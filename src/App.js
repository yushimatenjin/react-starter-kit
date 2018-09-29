import React, { Component } from 'react'
import './App.css'
import Todo from './components/Todo'
import { add, remove, reset } from './redux/todo/actions'
import { connect } from 'react-redux'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputTodo: ''
    }
  }
  render() {
    const { inputTodo } = this.state
    const { add, reset, remove, todos } = this.props

    return (
      <div className="App">
        <div>
          <input
            type="text"
            value={inputTodo}
            ref={ref => (this.inputTodo = ref)}
            onChange={() => {
              this.setState({
                inputTodo: this.inputTodo.value
              })
            }}
          />
          <button
            onClick={() => {
              add(inputTodo)
              this.setState({ inputTodo: '' })
              console.log(this.state.inputTodo)
            }}
          >
            Add
          </button>
          <button
            onClick={() => {
              reset(inputTodo)
              this.setState({ inputTodo: '' })
            }}
          >
            Reset
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { todos: state.todo }
}
const mapDispatchToProps = dispatch => {
  return {
    add: inputTodo => dispatch(add(inputTodo)),
    remove: inputTodo => dispatch(remove(inputTodo)),
    reset: inputTodo => dispatch(reset(inputTodo))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
