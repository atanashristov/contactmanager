import * as React from 'react'
import { IAction, IState } from './types'

const Context = React.createContext<IState>({} as IState)

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      }
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      }
    default:
      return state
  }
}

export class Provider extends React.Component {
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
      },
      {
        email: 'John.Doe@me.com',
        id: '28ed6a8e-9441-4479-ae35-e8df74ff1f1b',
        name: 'John Doe',
        phone: '(999) 999-9999'
      },
      {
        email: 'Jane.Doe@me.com',
        id: '46cfaf8c-4ff7-48e4-a93e-4ec9ac47bcd1',
        name: 'Jane Doe',
        phone: '(888) 888-8888'
      }
    ],
    dispatch: (action: IAction) => {
      this.setState(state => reducer(state as IState, action))
    }
  }

  render() {
    return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>
  }
}

export const Consumer = Context.Consumer
