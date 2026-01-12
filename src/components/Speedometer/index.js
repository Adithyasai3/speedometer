//code
import {useState} from 'react'
import './index.css'

const SpeedCounter = () => {
  const [count, setCount] = useState(0)

  const onIncrement = () => {
    setCount(prev => Math.min(prev + 10, 200))
  }

  const onDecrement = () => {
    setCount(prev => Math.max(prev - 10, 0))
  }

  return (
    <div>
      <h1>
        Speed is <span>{count}</span> kmph
      </h1>

      <p>Min limit is 0 kmph and max is 200 kmph</p>

      <button type="button" onClick={onIncrement}>
        Accelerate
      </button>

      <button type="button" onClick={onDecrement}>
        Apply Brake
      </button>
    </div>
  )
}

export default SpeedCounter
