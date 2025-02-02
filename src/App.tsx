import Button from './UI/Button/Button'
import './App.css'

function App() {
  return (
    <div className="wrapper">
      <Button
        style="primary"
        size={56}
        state="enabled"
        focused={false}
        label={'Что сделать'}
      />
    </div>
  )
}

export default App
