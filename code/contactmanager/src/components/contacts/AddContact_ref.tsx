import * as React from 'react'
import * as uuid from 'uuid'
import { Consumer } from '../../context'
import { DispatchType } from '../../types'

interface IProps {
  name: string
  email: string
  phone: string
}

class AddContact extends React.Component<IProps> {
  static defaultProps = {
    name: 'Fred Smith',
    email: 'fred.smith@email.net',
    phone: '777-777-7777'
  }

  nameInput: React.RefObject<HTMLInputElement>
  emailInput: React.RefObject<HTMLInputElement>
  phoneInput: React.RefObject<HTMLInputElement>

  constructor(props: IProps) {
    super(props)

    this.nameInput = React.createRef()
    this.emailInput = React.createRef()
    this.phoneInput = React.createRef()
  }

  handleSubmit = (dispatch: DispatchType, e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newContact = {
      id: uuid(),
      name: this.nameInput.current ? this.nameInput.current.value : '',
      email: this.emailInput.current ? this.emailInput.current.value : '',
      phone: this.phoneInput.current ? this.phoneInput.current.value : ''
    }
    dispatch({ type: 'ADD_CONTACT', payload: newContact })
  }

  render() {
    const { email, name, phone } = this.props

    return (
      <Consumer>
        {value => {
          const { dispatch } = value
          return (
            <div className="card mb-3">
              <div className="card-header">Add contact</div>
              <div className="card-body">
                <form onSubmit={this.handleSubmit.bind(this, dispatch)}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="Name"
                      className="form-control form-control-lg"
                      placeholder="Enter Name..."
                      defaultValue={name}
                      ref={this.nameInput}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      name="Email"
                      className="form-control form-control-lg"
                      placeholder="Enter Email..."
                      defaultValue={email}
                      ref={this.emailInput}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      name="Phone"
                      className="form-control form-control-lg"
                      placeholder="Enter Phone..."
                      defaultValue={phone}
                      ref={this.phoneInput}
                    />
                  </div>
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
