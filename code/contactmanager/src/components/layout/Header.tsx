import * as React from 'react'
import { Link } from 'react-router-dom'

interface IProps {
  branding?: string
}

const Header: React.FunctionComponent<IProps> = props => {
  const { branding = 'My App' } = props

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home">&nbsp;</i>Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                <i className="fas fa-plus">&nbsp;</i>Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about/:id" className="nav-link">
                <i className="fas fa-question">&nbsp;</i>About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
