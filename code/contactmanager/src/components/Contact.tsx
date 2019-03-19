import * as React from 'react'

interface IProps {
  name: string
  email: string
  phone: string
}

class Contact extends React.Component<IProps> {
  render() {
    const { name, email, phone } = this.props

    return (
      <div className="card card-body mb-3">
        <h4>{name}</h4>
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>
      </div>
    )
  }
}

export default Contact
