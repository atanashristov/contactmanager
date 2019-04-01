import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

type Props = RouteComponentProps<{ id: string }>

const PageWithIdParameter: React.FunctionComponent<Props> = props => (
  <div>
    <h1 className="display-4">id={props.match.params.id}</h1>
  </div>
)

export default PageWithIdParameter
