import * as React from 'react'
import * as uuid from 'uuid'
import { Consumer } from '../../context'
import { DispatchType, IContact } from '../../types'
import { TextInputGroup } from '../layout/TextInputGroup'

const defaultState: IContact = {
  name: '',
  email: '',
  phone: '',
  errors: {}
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

    // Check for errors
    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } })
      return
    }
    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } })
      return
    }
    if (phone === '') {
      this.setState({ errors: { phone: 'Phone is required' } })
      return
    }

    const newContact = {
      id: uuid(),
      name,
      email,
      phone,
      errors: {}
    }
    dispatch({ type: 'ADD_CONTACT', payload: newContact })
    this.setState({ ...defaultState })
  }

  render() {
    const { email, name, phone, errors } = this.state

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
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    placeholder="Enter Email..."
                    value={email}
                    onChange={this.handleChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone..."
                    value={phone}
                    onChange={this.handleChange}
                    error={errors.phone}
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
