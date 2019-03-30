import * as React from 'react'
import { Consumer } from '../context'
import { DispatchType } from '../types'

interface IProps {
  id: string
  name: string
  email: string
  phone: string
}

interface IState {
  showContactInfo: boolean
}

class Contact extends React.Component<IProps, IState> {
  state = {
    showContactInfo: false
  }

  onShowClick = (name: string, e: React.MouseEvent) => {
    console.log(e.target)
    console.log(`${name} clicked.`)

    this.setState({
      showContactInfo: !this.state.showContactInfo
    })
  }

  onDeleteClick = (id: string, dispatch: DispatchType) => {
    dispatch({ type: 'DELETE_CONTACT', payload: id })
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
                  onClick={this.onShowClick.bind(this, name)}
                  className="fas fa-sort-down"
                  style={{ cursor: 'pointer' }}
                />
                <i
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
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
