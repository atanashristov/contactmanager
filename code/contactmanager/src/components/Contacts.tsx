import * as React from 'react'
import Contact from './Contact'

interface IContact {
  id: string
  name: string
  email: string
  phone: string
}

interface IState {
  contacts: IContact[]
}

class Contacts extends React.Component<{}, IState> {
  /*
  constructor(props: {}) {
    super(props)

    this.state = {
      contacts: [
        {
          email: 'John.Doe@me.com',
          id: '28ed6a8e-9441-4479-ae35-e8df74ff1f1a',
          name: 'John Doe',
          phone: '(999) 999-9999'
        },
        {
          email: 'Jane.Doe@me.com',
          id: '46cfaf8c-4ff7-48e4-a93e-4ec9ac47bcd0',
          name: 'Jane Doe',
          phone: '(888) 888-8888'
        }
      ]
    }
  }
*/

  state = {
    contacts: [
      {
        email: 'John.Doe@me.com',
        id: '28ed6a8e-9441-4479-ae35-e8df74ff1f1a',
        name: 'John Doe',
        phone: '(999) 999-9999'
      },
      {
        email: 'Jane.Doe@me.com',
        id: '46cfaf8c-4ff7-48e4-a93e-4ec9ac47bcd0',
        name: 'Jane Doe',
        phone: '(888) 888-8888'
      }
    ]
  }

  render() {
    const { contacts } = this.state

    return (
      <div>
        {contacts.map(contact => (
          <Contact key={contact.id} {...contact} />
        ))}
      </div>
    )
  }
}

export default Contacts
