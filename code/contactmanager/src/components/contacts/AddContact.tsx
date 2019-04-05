import axios from 'axios'
import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
// import * as uuid from 'uuid'
import { Consumer } from '../../context'
import { DispatchType, IContact } from '../../types'
import TextInputGroup from '../layout/TextInputGroup'

const defaultState: IContact = {
  name: '',
  email: '',
  phone: '',
  errors: {}
}

type Props = RouteComponentProps<{}>

class AddContact extends React.Component<Props, IContact> {
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

  handleSubmit = async (dispatch: DispatchType, e: React.FormEvent<HTMLFormElement>) => {
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
      // id: uuid(),
      name,
      email,
      phone,
      errors: {}
    }

    // axios
    //   .post('https://jsonplaceholder.typicode.com/users', newContact)
    //   .then(res => dispatch({ type: 'ADD_CONTACT', payload: res.data }))

    try {
      const res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact)
      dispatch({ type: 'ADD_CONTACT', payload: res.data })
      this.setState({ ...defaultState })
      this.props.history.push('/')
    } catch (e) {
      // TODO
    }
  }

  render() {
    const { email, name, phone, errors } = this.state

    return (
      <Consumer>
        {value => {
          const { dispatch } = value
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
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
