import axios from 'axios'
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
    contacts: [],
    dispatch: (action: IAction) => {
      this.setState(state => reducer(state as IState, action))
    }
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users').then(res =>
      this.setState({
        contacts: res.data
      })
    )
  }

  render() {
    return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>
  }
}

export const Consumer = Context.Consumer
