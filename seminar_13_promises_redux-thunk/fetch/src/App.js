import React from 'react'
import './App.css'

const BASE_URL = 'http://valerystatinov.com/api'
const request = (url, method = 'GET', body) => {
  return fetch(`${BASE_URL}${url}`, {
    method,
    headers: {
      Token: 'Valeron',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(res => res.json())
}

class App extends React.Component {
  state = {
    projects: [],
    tasks: []
  }

  loadProjects = () => {
    request('/projects/').then(res => // 'http://valerystatinov.com/api/projects/'
      this.setState({
        projects: res
      })
    ).catch(err => {
      // handle error
    })
  }

  loadTasks = () => {
    request('/projects/2/tasks/').then(res => {
      this.setState({
        tasks: res
      })
    })
  }

  addTask = () => {
    const newTask = {
      name: 'Demo task 1234',
      description: 'Demo descr4321',
      priority: 1
    }
    request('/projects/1/tasks/', 'POST', newTask).then(() => {
      this.loadTasks()
    })
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh'
        }}
      >
        <div>
          <div>PROJECTS</div>
          <button onClick={this.loadProjects}>LOAD PROJECTS</button>
          <div>
            {this.state.projects.map(project => (
              <div key={project.id}>{project.name}</div>
            ))}
          </div>
        </div>

        <div>
          <div>TASKS</div>
          <button onClick={this.loadTasks}>LOAD TASKS</button>
          <button onClick={this.addTask}>ADD TASK</button>
          <div>
            {this.state.tasks.map(task => (
              <div key={task.id} style={{ padding: '8px', border: '1px solid', marginTop: '5px'}}>
                <div>{task.name}</div>
                <div>{task.description}</div>
                <div>{task.priority}</div>
                <div>Completed: {task.completed.toString()}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default App