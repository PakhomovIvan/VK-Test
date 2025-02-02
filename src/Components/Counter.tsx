import { CounterValue } from './CounterParams'

const Counter = ({ countValue }: CounterValue) => {
  return <>{countValue && <span>{countValue}</span>}</>
}

export default Counter
