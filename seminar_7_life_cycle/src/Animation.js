import React from "react"

class Task extends React.Component {
  state = {
    showAnimation: false,
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.done && this.props.done) {
      this.setState({ showAnimation: true })
    }
  }

  handleAnimationEnd = () => {
    this.setState({ showAnimation: false })
  }

  render() {
    return (
      <h1
        className={this.state.showAnimation ? "shake_className" : ""}
        onAnimationEnd={this.handleAnimationEnd}
      >
        Hello world!
      </h1>
    )
  }
}

export class AnimationManger extends React.Component {
  state = {
    done: false,
  }

  handleClick = () => {
    this.setState({ done: true })
  }

  render() {
    return (
      <div>
        <Task done={this.state.done} />

        <button onClick={this.handleClick}>COMPLETE TASK</button>
      </div>
    )
  }
}
