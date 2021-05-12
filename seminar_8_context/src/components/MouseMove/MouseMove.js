import React from 'react'

export class MouseTracker extends React.Component {
  state = {
    x: 0,
    y: 0
  }

  handleMouseMove = (event) => {
    const { x, y } = event

    this.setState({ x, y })
  }

  componentDidMount() {
    document.addEventListener('mousemove', this.handleMouseMove)
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.handleMouseMove)
  }

  render() {
    return this.props.renderMe(this.state.x, this.state.y)
  }
}