export interface ButtonProps {
  style: 'primary' | 'secondary'
  size: 28 | 36 | 56
  state?: 'enabled' | 'pressed' | 'loading' | 'disabled'
  counter?: boolean
  focused?: boolean
  label: string
}
