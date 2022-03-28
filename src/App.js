import React, {useState, useEffect} from 'react'
import './App.css';
import Grocery from "./Grocery";
import groceStuff from "./groceStuff"

function App() {
   //keeps track of list and update it
  const [list, setList] = useState(Grocery)

  const addGroce = () => {
    setList(list.concat([{
      item: document.querySelector("item").value,
      brand: document.querySelector("brand").value,
      unit: document.querySelector("unit").value,
      quantity: document.querySelector("quantity").value,
      isPurchased: false
    }]))
  }

  const removeGroce = () => {
    setList(list.concat([{
      item: document.querySelector("item").value,
      brand: document.querySelector("brand").value,
      unit: document.querySelector("unit").value,
      quantity: document.querySelector("quantity").value,
      isPurchased: false
    }]))
  }



 useEffect(() => {
   document.querySelector("#button").addEventListener('click', addGroce)
   document.querySelector("#remv").addEventListener('click', removeGroce)

  })

   return (
  
     <div className="app">
         
     <form>
     <h1>Grocery Items</h1> 
       <input type="text" name="item" placeholder="Item"></input>
        <input type="text" name="brand" placeholder="Brand"></input>
        <input type="text" name="unit" placeholder="Units"></input>
        <input type="text" name="quantity" placeholder="Quantity"></input>
        <input type="submit" value="ADD" id="button"></input>
        <input type="submit" value="REMOVE" id="remv"></input>
     </form>
   

 <div className="list">
 {list.map((groce, index) =>{
   return (
     groce.isPurchased ? null
     : <Grocery key={index}
     item={groce.item}
     brand={groce.brand}
     unit={groce.unit}
     quantity={groce.quantity} />
   )
 })
 }
</div>
</div>

   )}


export default App;

