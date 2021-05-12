import React from 'react'
import { AnimationManger } from './Animation'
import './App.css';

const Clock = ({ date }) => <h3>{date.toLocaleTimeString()}</h3> // hh:mm:ss

class MyComp extends React.Component {
  shouldComponentUpdate(prevProps) {
    return prevProps.message !== this.props.message
  }

  render() {
    console.log('MyComp was rerendered')

    return <h3>{this.props.message}</h3>
  }
}

class App extends React.Component {
  state = {
    date: new Date(),
    message: 'Hello world'
  }

  tick = () => {
    this.setState({ date: new Date() })
  }

  handleClick = () => {
    this.setState({ message: 'New heloo world' })
  }

  componentDidMount() {
    setInterval(this.tick, 1000)
  }

  render () {
    return (
      <div className="center">
        <h3>Current time is</h3>
        <Clock date={this.state.date} />

        <MyComp message={this.state.message} data={this.state.tasks} />
        <button onClick={this.handleClick}>CLICK</button>

        <AnimationManger />
      </div>
    )
  }
}

export default App
