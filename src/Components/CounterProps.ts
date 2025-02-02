export interface CounterProps {
  styleParam: 'primary' | 'secondary'
  size: 8 | 12 | 16 | 20 | 24
  stroke?: boolean
  quantity: number | string | null
  pulse?: boolean
}
