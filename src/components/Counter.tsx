import { useState } from "react"
import classes from './Counter.module.scss'

const Counter = () => {
    const [count, setCount] = useState(0)

    
    const increment = () =>{
        setCount(count +1)
        console.log(setCount);
    }
  return (
<div className={classes.btn} >
    <h1>{count}</h1>
    <button className={classes.btn}  onClick={increment}>+++++++</button>
</div>  
)
}

export default Counter

