import * as React from 'react'
import AddContact from './components/contacts/AddContact_ref'
import Contacts from './components/contacts/Contacts'
import Header from './components/layout/Header'
import { Provider } from './context'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <AddContact />
            <Contacts />
          </div>
        </div>
      </Provider>
    )
  }
}

export default App
