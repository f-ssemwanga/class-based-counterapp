

import { Banner } from "./components/Banner"
import { Counter } from "./components/Counter.js"
import { HooksCounter } from "./components/HooksCounter"

export const App = () =>{
   //add a return statement
    return (
    <div>
        <Banner
        // add the props
        title ="React Counter Application"
        subTitle="Use the buttons to interact with your choice of counter"
        />
        <Counter
         subTitle="Class Counter"
        />
        <HooksCounter
            subTitle="Hooks Counter"
        />
    </div>
   
)}