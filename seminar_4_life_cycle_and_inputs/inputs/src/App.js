import React from "react"
import "./App.css"

const MyInput = ({ value, onChange, name }) => {
  // do some magic

  return <input value={value} onChange={onChange} name={name} />
}

class App extends React.Component {
  state = {
    name: '',
    description: '',
  }

  handleChange = (event) => {
    const { value, name } = event.currentTarget

    this.setState({ [name]: value })
  }

  render() {
    console.log(this.state)

    return (
      <div>
        {/* <input value={this.state.password} onChange={this.handleChange} name="password" />
        <input value={this.state.description} onChange={this.handleChange} name="description" /> */}

        <MyInput value={this.state.description} onChange={this.handleChange} name="password" />
      </div>
    )
  }
}

export default App
