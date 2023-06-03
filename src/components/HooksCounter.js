
export const HooksCounter = ({subTitle}) =>{

    return(
        <div className="border m-3 p-4 rounded"> 
        <h2 className="text-center">{subTitle}</h2>
        <hr/>
          <div className="sub-title text-center m-3 fs-2">Counter: <span className="text-primary fs-2 p-2 fw-bold">0</span></div>
          <div className="d-flex justify-content-evenly flex-column gap-3">
              <button className ="btn btn-success fs-3">-</button>
              <button className ="btn btn-danger" >Reset</button>
              <button className ="btn btn-success fs-3">+</button> 
          </div>
        
          </div>
    )
}