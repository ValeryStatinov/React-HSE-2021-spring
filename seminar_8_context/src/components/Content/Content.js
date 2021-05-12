import React from "react"
import classnames from 'classnames/bind'

import { Input } from '../Input/Input'
import { Button } from '../Button/Button'
import styles from './Content.module.scss'
import { MouseTracker } from "../MouseMove/MouseMove"


const cx = classnames.bind(styles)

const Mouse = ({ x, y }) => <div>x: {x} y: {y}</div>
const Cat = ({ x, y }) => <div>I want to catch mouse at x: {x} y: {y}</div>

const renderMeFunc = (x, y) => <Mouse x={x} y={y} />

export const Content = () => (
  <div className={cx("content")}>
    <Input placeholder="Name" type="text" />
    <Input placeholder="Description" type="text" />
    <Button>ADD TASK</Button>

    <MouseTracker renderMe={renderMeFunc} />
    <MouseTracker renderMe={(x, y) => <Cat x={x} y={y} />} />
  </div>
)
