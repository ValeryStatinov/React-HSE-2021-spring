import React from "react"
import classnames from "classnames/bind"

import styles from "./Button.module.scss"
import { ThemeContext } from "../App/ThemeContext"

const cx = classnames.bind(styles)

// в таком виде кнопка должна быть функциональным компонентом
// она является классовым для демонстрации получения значений из контекста в классоввом компоненте
export class Button extends React.Component {
  static contextType = ThemeContext

  render() {
    return (
      <button className={cx("button", `button-theme-${this.context}`)} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    )
  }
}
