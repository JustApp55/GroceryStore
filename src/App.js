import React, {useState, useEffect} from 'react'
import './App.css';
import Grocery from "./Grocery";
import groceStuff from "./groceStuff"

function App() {
   //keeps track of list and update it
  const [list, setList] = useState([])



 useEffect(() => {
   document.querySelector("#button").addEventListener('click')

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


  // const handleAddItem = () => {
  //   const newList = [...list, {title: inputData}]
  //    //receives new list of items
  //     setlist(newList);
  //     setInputData('')
  //     console.log(list)
  // }

  //keeps track of input field
  // const [inputData, setInputData] = useState('')

  // useEffect(() => {
  //   const handleRemoveItem = (index) => {
  //     const newList = [];
  //     for (let i =0; i < list.length; i++) {
  //       if (index !== i) {
  //         newList.push(list[i])
  //       }
  //     }
  //     setlist(newList)
  //   }
  // })
  


  // return (
  //   <div className="App">
  //     <h1>Grocery Store</h1>
  //     <div className="input">
        //   {/* handles the change in the value of an input element */}
        // {/* <input type="text" value={inputData} onChange={(event) => setInputData(event.taret.value)}></input> */}
        // {/* <input type="text" name="item" placeholder="Item"></input>
        // <input type="text" name="brand" placeholder="Brand"></input>
        // <input type="text" name="unit" placeholder="Units"></input>
        // <input type="text" name="quantity" placeholder="Quantity"></input> */}

        // {/* <input type="submit" value="ADD" onClick={() => handleAddItem()}></input> */}
       
      // </div>
     

  //   </div>
  // )

































// return (
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Groceries hoMEWORK
//       </a>
//     </header>
//   </div>
// );