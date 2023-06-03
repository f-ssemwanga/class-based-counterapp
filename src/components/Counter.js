
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
        return <div> Counter content </div>;
    }

}