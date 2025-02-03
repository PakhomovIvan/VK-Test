import Button from './UI/Button/Button'
import './App.css'

function App() {
  return (
    <div className="wrapper">
      <Button
        styleParam="primary"
        size={56}
        state="enabled"
        focused={false}
        label={'Увеличить счётчик'}
      />
    </div>
  )
}

export default App
