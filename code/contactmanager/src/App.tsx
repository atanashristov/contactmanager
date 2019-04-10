import * as React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import AddContact from './components/contacts/AddContact'
import Contacts from './components/contacts/Contacts'
import EditContact from './components/contacts/EditContact'
import Header from './components/layout/Header'
import About from './components/pages/About'
import NotFound from './components/pages/NotFound'
import PageWithIdParameter from './components/pages/PageWithIdParameter'
import Test from './components/test/Test'

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
                <Route exact={true} path="/contact/edit/:id" component={EditContact} />
                <Route path="/about" component={About} />
                <Route exact={true} path="/test" component={Test} />
                <Route exact={true} path="/page/:id" component={PageWithIdParameter} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
