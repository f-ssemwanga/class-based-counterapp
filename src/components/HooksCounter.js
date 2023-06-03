import { useState } from "react"

export const HooksCounter = ({subTitle}) =>{
    
    // definin a use state
    const [count, setCount] = useState(0)
    
    //event handlers
    const resetHandler = () =>{
        setCount(0)
    }

    const incrementHandler = () =>{
        setCount(count + 1)
    }
    const decrementHandler = () =>{
        if(count >0){
            setCount(count -1)
        }
        
    }

    return(
        <div className="border m-3 p-4 rounded"> 
        <h2 className="text-center">{subTitle}</h2>
        <hr/>
          <div className="sub-title text-center m-3 fs-2">Counter Value: <span className="text-primary fs-2 p-2 fw-bold">{count}</span></div>
          <div className="d-flex justify-content-evenly flex-column gap-3">
              <button className ="btn btn-success fs-3" onClick={decrementHandler}>-</button>
              <button className ="btn btn-danger"  onClick={resetHandler}>Reset</button>
              <button className ="btn btn-success fs-3" onClick={incrementHandler}>+</button> 
          </div>
        
          </div>
    )
}