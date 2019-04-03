import * as React from 'react'

class Test extends React.Component {
  // When the Redux state has changed, and the component receives new props.
  // We can ensure that component state is in sync with the new props,
  // as we update the component state with the nextProps.
  //
  static getDerivedStateFromProps(nextProps: any, nextState: any) {
    return {
      test: 'something'
    } // has to return new state.
  }

  state = {
    title: ''
  }

  // Invoked right before the most recently rendered output is committed to the DOM
  // see: https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
  getSnapshotBeforeUpdate(prevProps: any, prevState: any) {
    return null // has to return new state.
  }

  componentDidMount() {
    // Fetch data from API, put up on the state
    console.log('componentDidMount...')

    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json =>
        this.setState({
          title: json.title
        })
      )
  }

  componentDidUpdate() {
    // When re-renders, like after changing state.
    console.log('componentDidUpdate...')
  }

  // Deprecated

  /*
  UNSAFE_componentWillMount() {
    console.log('componentWillMount...')
  }

  UNSAFE_componentWillUpdate() {
    console.log('componentWillUpdate...')
  }

  UNSAFE_componentWillReceiveProps(nextProps: any, nextState: any) {
    // When the Redux state has changed, and the component receives new props.
    // Set component state from nextProps.
    // DEPRECATED: Use static `getDerivedStateFromProps`.
    console.log('componentWillReceiveProps...')
    console.log(nextProps)
    console.log(nextState)
  }
*/

  render() {
    return (
      <div>
        <h1>Test Component</h1>
        <div>{this.state.title}</div>
      </div>
    )
  }
}

export default Test
