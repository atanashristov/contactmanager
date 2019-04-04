import axios from 'axios'
import * as React from 'react'
import { Consumer } from '../../context'
import { DispatchType, IContact } from '../../types'

interface IState {
  showContactInfo: boolean
}

class Contact extends React.Component<IContact, IState> {
  state = {
    showContactInfo: false
  }

  handleShowClick = (name: string, e: React.MouseEvent) => {
    console.log(e.target)
    console.log(`${name} clicked.`)

    this.setState({
      showContactInfo: !this.state.showContactInfo
    })
  }

  handleDeleteClick = (id: string, dispatch: DispatchType) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => dispatch({ type: 'DELETE_CONTACT', payload: id }))
  }

  render() {
    const { id, name, email, phone } = this.props
    const { showContactInfo } = this.state

    return (
      <Consumer>
        {value => {
          const { dispatch } = value
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}
                <i
                  onClick={this.handleShowClick.bind(this, name)}
                  className="fas fa-sort-down"
                  style={{ cursor: 'pointer' }}
                />
                <i
                  onClick={this.handleDeleteClick.bind(this, id, dispatch)}
                  className="fas fa-times"
                  style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                />
              </h4>
              {showContactInfo && (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              )}
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default Contact
