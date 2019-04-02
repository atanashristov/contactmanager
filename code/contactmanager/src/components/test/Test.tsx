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

  static getSnapshotBeforeUpdate(prevProps: any, prevState: any) {
    return null // has to return new state.
  }

  componentDidMount() {
    // Fetch data from API, put up on the state
    console.log('componentDidMount...')
  }

  UNSAFE_componentWillMount() {
    console.log('componentWillMount...')
  }

  componentDidUpdate() {
    // When re-renders, like after changing state.
    console.log('componentDidUpdate...')
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

  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    )
  }
}

export default Test
