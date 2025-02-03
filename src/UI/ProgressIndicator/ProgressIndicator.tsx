import { ProgressIndicatorParams } from './ProgressIndicatorParams'

const ProgressIndicator = ({ styleParam }: ProgressIndicatorParams) => {
  return (
    <>
      {styleParam === 'primary' ? (
        <img src="/spinner-primary.svg" alt="spinner" className="spinner" />
      ) : (
        <img src="/spinner-secondary.svg" alt="spinner" className="spinner" />
      )}
    </>
  )
}

export default ProgressIndicator
