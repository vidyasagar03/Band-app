import React from 'react'
import { useState } from "react";
import Button from './Button'

 function Increment() {
    let [ProductCount, updateCount] = useState(1)
function displayFormattedProductCount(){
  return ProductCount > 0 ? ProductCount: "1";
}
let Price=500;
let ProductPrice = function(){
   return ProductCount > 0 ? ProductCount * Price: "500";
}
  let decrementProductCount = function(){
    // ProductCount--;
    // console.log(ProductCount);
    updateCount(--ProductCount);
  }
  let incrementProductCount = function(){
    // ProductCount++;
    // console.log(ProductCount);
    updateCount(++ProductCount)
  }
  return (
    <div>
        <Button className='btn btn-primary me-2' eventHandler={decrementProductCount}> - </Button>
 
             <span class="me-2">{displayFormattedProductCount()}</span>
            <Button className='btn btn-primary me-2' eventHandler={incrementProductCount}> + </Button> 
               <span class="price"> {ProductPrice()} </span>

    </div>
  )
}
export default Increment;