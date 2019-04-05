import axios from 'axios'
import * as React from 'react'
import { Link } from 'react-router-dom'
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

  handleDeleteClick = async (id: string, dispatch: DispatchType) => {
    // axios
    //   .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    //   .then(res => dispatch({ type: 'DELETE_CONTACT', payload: id }))

    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      dispatch({ type: 'DELETE_CONTACT', payload: id })
    } catch (e) {
      // TODO
    }
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
                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: 'pointer',
                      float: 'right',
                      color: 'black',
                      marginRight: '1rem'
                    }}
                  />
                </Link>
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
