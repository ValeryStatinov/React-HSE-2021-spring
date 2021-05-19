import React from "react"
import { BrowserRouter, Switch, Route, Link, Redirect, withRouter } from "react-router-dom"

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" component={Header} />
        <Route path="/projects/" component={ProjectsHeader} />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login/" component={Login} />
          <Route exact path="/projects/" component={Projects} />
          <Route exact path="/projects/tasks/" component={Tasks} />
          <Route path="/projects/tasks/new/" component={New} />
          <Route path="/projects/:projectId/" component={SpecificProject} />

          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

const Header = () => {
  return (
    <div>
      <h2>Header</h2>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login/">Login</Link>
        </li>
        <li>
          <Link to="/projects/">Projects</Link>
        </li>
        <li>
          <Link to="/projects/tasks/">Projects/Tasks</Link>
        </li>
        <li>
          <Link to="/projects/tasks/new/">Projects/Tasks/New</Link>
        </li>
        <li>
          <Link to="/projects/1234/">Projects/1234</Link>
        </li>
      </ul>
      <hr />
    </div>
  )
}

const ProjectsHeader = () => <h3>Projects page header</h3>

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Login = ({ history }) => {
  const handleLogin = () => {
    history.push("/")
  }

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>LOG ME IN</button>
    </div>
  )
}

const Tasks = () => (
  <div>
    <h2>Tasks</h2>
  </div>
)

const New = () => (
  <div>
    <h2>New task</h2>
  </div>
)

const Projects = () => (
  <div>
    <h2>Projects</h2>
  </div>
)

const SpecificProject = ({ match }) => {
  const { projectId } = match.params

  if (!Number(projectId)) {
    return <Redirect to="/" />
  }

  return (
    <div>
      <h2>Specific Project {projectId}</h2>
    </div>
  )
}
