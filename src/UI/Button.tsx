import { useState } from 'react'
import Counter from '../Components/Counter'
import { CounterValue } from '../Components/CounterParams'
import { ButtonParams } from './ButtonParams'
import './Button.css'

const Button = ({ label }: ButtonParams) => {
  const [countValue, setCountValue] = useState<CounterValue>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleClickButton = () => {
    setIsLoading(true)
    setTimeout(() => {
      setCountValue((prev) => prev + 1)
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className="button" onClick={handleClickButton}>
      {isLoading ? (
        <img src="/spinner.svg" alt="spinner" className="spinner" />
      ) : (
        <>
          {' '}
          <p>{label}</p>
          <Counter countValue={countValue} />
        </>
      )}
    </div>
  )
}

export default Button
