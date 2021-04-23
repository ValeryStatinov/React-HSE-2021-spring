import logo from './logo.svg';
import './App.css';
import React from 'react';

const arr = [
  {
    id: 1,
    data: 'Hello'
  },
  {
    id: 2,
    data: 'World' // 'World' -> 'Mutations'
  }
]


const Item = ({ id, data }) => <div>{id} - {data}</div>

class App extends React.Component {
  state = {
    arr
  }

  handleClick = () => {
    this.setState((currentState) => {
      const newArr = [...currentState.arr]

      newArr[1] = { ...newArr[1], data: 'Mutations' }

      // newArr[1].data = 'Mutations' // mutation!
      
      return {
        arr: newArr
      }
    })
  }

  render() {
    return (
      <div>
        {this.state.arr.map(it => <Item id={it.id} data={it.data} />)}
        <button onClick={this.handleClick}>ADD NEW EL</button>
      </div>
    )
  }
}

export default App;
