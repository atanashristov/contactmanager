export interface IContact {
  id: string
  name: string
  email: string
  phone: string
}

export interface IAction {
  type: string
  payload: any
}

export type DispatchType = (action: IAction) => void

export interface IState {
  contacts: IContact[]
  dispatch: DispatchType
}
