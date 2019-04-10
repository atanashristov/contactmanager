export interface IContact {
  id?: string
  name: string
  email: string
  phone: string
}

export const defaultContact = (): IContact => {
  const res: IContact = {
    name: '',
    email: '',
    phone: ''
  }
  return res
}

export const validateContact = (name: string, email: string, phone: string): any => {
  const errors = {
    name: '',
    email: '',
    phone: ''
  }

  if (name === '') {
    errors.name = 'Name is required'
  }
  if (email === '') {
    errors.email = 'Email is required'
  }
  if (phone === '') {
    errors.phone = 'Phone is required'
  }

  return errors
}

export interface IError {
  [key: string]: string
}
export interface ITouched {
  [key: string]: boolean
}

export interface IContactFormState extends IContact {
  errors?: any
  touched?: any
}

export const defaultContactFormState = (): IContactFormState => {
  const res: IContactFormState = {
    name: '',
    email: '',
    phone: '',
    errors: {},
    touched: {}
  }
  return res
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
