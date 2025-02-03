import { useState } from 'react'
import Counter from '../../Components/Counter'
import ProgressIndicator from '../ProgressIndicator/ProgressIndicator'
import { ButtonProps } from './ButtonProps'
import './Button.css'

const Button = ({ styleParam, size, label }: ButtonProps) => {
  const [quantityValue, setQuantityValue] = useState<string | number | null>(
    null
  )
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleClickButton = () => {
    setIsLoading(true)
    setTimeout(() => {
      if (Number(quantityValue) >= 99 || quantityValue === '99+') {
        setQuantityValue('99+')
      } else {
        setQuantityValue((prev) => Number(prev) + 1)
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div
      className="button"
      onClick={handleClickButton}
      style={{ background: `var(--${styleParam})`, height: `${size}px` }}
    >
      {isLoading ? (
        <>
          <ProgressIndicator styleParam={styleParam} />
          <div className="btn-block hide">
            <p style={{ color: `var(--${styleParam}-text-color)` }}>{label}</p>
            <Counter
              styleParam={styleParam}
              size={16}
              quantity={quantityValue}
            />
          </div>
        </>
      ) : (
        <div className="btn-block">
          <p style={{ color: `var(--${styleParam}-text-color)` }}>{label}</p>
          <Counter styleParam={styleParam} size={16} quantity={quantityValue} />
        </div>
      )}
    </div>
  )
}

export default Button
