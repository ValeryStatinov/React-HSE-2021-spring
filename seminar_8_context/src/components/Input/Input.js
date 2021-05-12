import React from "react"
import classnames from "classnames/bind"

import styles from "./Input.module.scss"
import { ThemeContext } from "../App/ThemeContext"

const cx = classnames.bind(styles)

export const Input = ({ value, onChange, placeholder }) => (
  <ThemeContext.Consumer>
    {theme => (
      <input
        className={cx("input", `input-theme-${theme}`)}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    )}
  </ThemeContext.Consumer>
)
