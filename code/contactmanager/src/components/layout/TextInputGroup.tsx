import * as classnames from 'classnames'
import * as React from 'react'

interface IProps {
  label: string
  name: string
  value?: string
  placeholder?: string
  type?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
}
export const TextInputGroup: React.FunctionComponent<IProps> = ({
  label,
  name,
  value,
  placeholder,
  type = 'text',
  onChange,
  error
}) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <input
      type={type}
      name={name}
      className={classnames('form-control form-control-lg', {
        'is-invalid': error
      })}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    {error && <div className="invalid-feedback">{error}</div>}
  </div>
)
