import { useState } from "react"
import classes from './Counter.module.scss'

const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () =>{
        setCount(count +1)
    }
  return (
<div className={classes.counter} >
    <h1>{count}</h1>
    <button className={classes.btn}  onClick={increment}>+++++++</button>
</div>  
)
}

export default Counter

