import * as React from 'react'
import { IContact } from '../../types'

class AddContact extends React.Component<{}, IContact> {
  state = {
    email: '',
    name: '',
    phone: ''
  }

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

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    const { email, name, phone } = this.state

    return (
      <div className="card mb-3">
        <div className="card-header">Add contact</div>
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-lg"
                placeholder="Enter Name..."
                value={name}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="form-control form-control-lg"
                placeholder="Enter Email..."
                value={email}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                className="form-control form-control-lg"
                placeholder="Enter Phone..."
                value={phone}
                onChange={this.handleChange}
              />
            </div>
            <input type="submit" value="Add Contact" className="btn btn-light btn-block" />
          </form>
        </div>
      </div>
    )
  }
}

export default AddContact
