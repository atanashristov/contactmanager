import * as React from 'react'

interface IProps {
  label: string
  name: string
  value?: string
  placeholder?: string
  type?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export const TextInputGroup: React.FunctionComponent<IProps> = ({
  label,
  name,
  value,
  placeholder,
  type = 'text',
  onChange
}) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <input
      type={type}
      name={name}
      className="form-control form-control-lg"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
)
