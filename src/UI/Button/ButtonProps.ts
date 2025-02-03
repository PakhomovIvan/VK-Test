export interface ButtonProps {
  styleParam: 'primary' | 'secondary'
  size: 28 | 36 | 56
  state?: 'enabled' | 'pressed' | 'loading' | 'disabled'
  counter?: boolean
  focused?: boolean
  label: string
}
