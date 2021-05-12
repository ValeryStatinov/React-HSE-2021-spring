import React from "react"
import classnames from "classnames/bind"

import styles from "./App.module.scss"
import { Content } from "../Content/Content"
import { DEFAULT_THEME, ThemeContext } from "./ThemeContext"

const cx = classnames.bind(styles)

class App extends React.Component {
  state = {
    theme: DEFAULT_THEME,
  }

  handleThemeChange = event => {
    this.setState({ theme: event.target.value })
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

        <ThemeContext.Provider value={this.state.theme}>
          <Content />
        </ThemeContext.Provider>
      </div>
    )
  }
}

export default App
