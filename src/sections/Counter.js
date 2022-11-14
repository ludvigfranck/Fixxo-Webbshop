import React, { useState } from 'react'

function Counter({init = 0}) {
const [count, setCount] = useState(init)

const increment = () => {
    setCount(current => current + 1)
}

const decrement = () => {
    setCount(current => current - 1)
}

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100 text-center">
        <div>
            <p className="dislplay-4">
                count:
                <span className="ms-5" data-testid="count">{count}</span>
            </p>
            <div className="mt-5">
                <button onClick={() => increment()} className="btn btn-lg">+</button>
                <button onClick={() => decrement()} className="btn btn-lg">-</button>
            </div>
        </div>
    </div>
  )
}

export default Counter