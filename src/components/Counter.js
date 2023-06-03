
//declaring counter as a class based component

//import the react base component
import {Component} from "react";

//create the class passing props
export class Counter extends Component{
    //add a constructor
    constructor(props){
      //call the constructor of the Component class using the super method
      super(props);
    }

    //render method

    render(){
        return <div className="border m-3 p-4 rounded"> 
          <div className="sub-title text-center m-5 fs-2">Counter: <span className="text-primary fs-2 p-2 fw-bold">0</span></div>
          <div className="d-flex justify-content-evenly flex-column gap-3">
              <button className ="btn btn-success fs-3">-</button>
              <button className ="btn btn-danger">Reset</button>
              <button className ="btn btn-success fs-3">+</button> 
          </div>
                              
          
          </div>;
    }

}