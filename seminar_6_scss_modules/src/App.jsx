import React from "react"
import classnames from "classnames/bind"

import styles from "./App.module.scss"

const cx = classnames.bind(styles)

const MyInput = ({ placeholder, type, theme }) => (
  <input className={cx("input", `input-theme-${theme}`)} placeholder={placeholder} type={type} />
)

const MyButton = ({ children }) => <button className={cx("button")}>{children}</button>

class App extends React.Component {
  state = {
    theme: "light", // "dark"
    showAnimation: false,
  }

  handleThemeChange = event => {
    this.setState({ theme: event.target.value })
  }

  toggleShowAnimation = () => {
    this.setState(currentState => ({ showAnimation: !currentState.showAnimation }))
  }

  render() {
    return (
      <div className={cx("container", `container-theme-${this.state.theme}`)}>
        <div className={cx("radios")}>
          <div>
            <input
              type="radio"
              name="theme"
              id="light"
              value="light"
              checked={this.state.theme === "light"}
              onChange={this.handleThemeChange}
            />
            <label htmlFor="light">Light theme</label>
          </div>

          <div>
            <input
              type="radio"
              name="theme"
              id="dark"
              value="dark"
              checked={this.state.theme === "dark"}
              onChange={this.handleThemeChange}
            />
            <label htmlFor="dark">Dark theme</label>
          </div>
        </div>

        <div className={cx("content")}>
          <MyInput placeholder="Login" type="text" theme={this.state.theme} />
          <MyInput placeholder="Password" type="password" theme={this.state.theme} />
          <MyButton>
            <div>Sign in</div>
          </MyButton>

          <button
            className={cx({ shake_className: this.state.showAnimation })}
            onClick={this.toggleShowAnimation}
            onAnimationEnd={this.toggleShowAnimation}
          >
            SHAKE ME
          </button>
        </div>
      </div>
    )
  }
}

export default App
