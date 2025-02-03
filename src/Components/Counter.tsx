import { CounterProps } from './CounterProps'

const Counter = ({ styleParam, size, quantity }: CounterProps) => {
  return (
    <>
      {quantity && (
        <span
          style={{
            background: `var(--${styleParam}-transparent)`,
            color: `var(--${styleParam}-text-color)`,
            fontSize: `${size}px`,
          }}
        >
          {quantity}
        </span>
      )}
    </>
  )
}

export default Counter
