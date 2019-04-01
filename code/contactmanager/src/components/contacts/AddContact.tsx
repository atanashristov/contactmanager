import * as React from 'react'
import * as uuid from 'uuid'
import { Consumer } from '../../context'
import { DispatchType, IContact } from '../../types'
import { TextInputGroup } from '../layout/TextInputGroup'

const defaultState: IContact = {
  name: '',
  email: '',
  phone: ''
}
class AddContact extends React.Component<{}, IContact> {
  state = { ...defaultState }

  handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
  }

  handleSubmit = (dispatch: DispatchType, e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { name, email, phone } = this.state
    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    }
    dispatch({ type: 'ADD_CONTACT', payload: newContact })
    this.setState({ ...defaultState })
  }

  render() {
    const { email, name, phone } = this.state

    return (
      <Consumer>
        {value => {
          const { dispatch } = value
          return (
            <div className="card mb-3">
              <div className="card-header">Add contact</div>
              <div className="card-body">
                <form onSubmit={this.handleSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name..."
                    value={name}
                    onChange={this.handleChange}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    placeholder="Enter Email..."
                    value={email}
                    onChange={this.handleChange}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone..."
                    value={phone}
                    onChange={this.handleChange}
                  />
                  <input type="submit" value="Add Contact" className="btn btn-light btn-block" />
                </form>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default AddContact
