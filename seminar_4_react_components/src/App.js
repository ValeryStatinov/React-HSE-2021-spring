import logo from "./logo.svg"
import "./App.css"
import React from "react"

const Inner = ({ name, onClick }) => {
  return (
    <div>
      <button onClick={onClick}>{name}</button>
    </div>
  )
}

class Outer extends React.Component {
  state = {
    message: "",
  }

  changeStateMessage = () => {
    this.setState({ message: "Hello I am new message!" })
  }

  render() {
    return (
      <div>
        <Inner name="CLICK ME" onClick={this.changeStateMessage} />
        <div>{this.state.message}</div>
      </div>
    )
  }
}

// Нужно реализовать компонент, рисующий кнопку и рядом число - сколько раз была нажата кнопка
class Counter extends React.Component {
  state = {
    count: 0,
  }

  handleClick = () => {
    this.setState(currentState => {
      return {
        count: currentState.count + 1,
      }
    })
  }

  render() {
    return (
      <button onClick={this.handleClick} className="my-class">
        {this.state.count}
      </button>
    )
  }
}

const App = () => {
  return (
    <div>
      <Outer />
      <Counter />
    </div>
  )
}

export default App
