import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddContact from './components/contacts/AddContact'
import Contacts from './components/contacts/Contacts'
import Header from './components/layout/Header'
import About from './components/pages/About'
import { Provider } from './context'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact={true} path="/" component={Contacts} />
                <Route exact={true} path="/contact/add" component={AddContact} />
                <Route exact={true} path="/about" component={About} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
