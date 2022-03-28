import React, {useState, useEffect} from 'react'
import './App.css';
import Grocery from "./Grocery";
import groceStuff from "./groceStuff"

function App() {
   //keeps track of list and update it
  const [list, setlist] = useState([])

 useEffect(() => {
})
   return (
  
     <div className="app">
         
     <form>
     <h1>Grocery Items</h1> 
       <input type="text" name="item" placeholder="Item"></input>
        <input type="text" name="brand" placeholder="Brand"></input>
        <input type="text" name="unit" placeholder="Units"></input>
        <input type="text" name="quantity" placeholder="Quantity"></input>
        <input type="submit" value="ADD" id="add"></input>
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

   )
}


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





//     const handleRemoveItem = (index) => {
//       const newList = [];
//       for (let i = 0; i < list.length; i++) {
//         if (index !== i) {
//           newList.push(list[i])
//         }
//       }
//       setList(newList);
//     }
      

//  function App() {
//    //keeps track of list and update it
//   const [list, setList] = useState([]);
//   //keeps track of input field
//   const [inputData, setInputData] = useState({
//     item: "Item",
//     brand: "Brand",
//     units: "Units",
//     quantity: "Quantity"
//   });

//   const grocery = [
//     { 
//         item:'apple',
//         brand:'regal fruit',
//         units:'2 lb',
//         quantity: 6,
//         isPurchased:'false'
//       },
//      {
//         item:'celery',
//         brand:'omega',
//         units:'50 oz',
//         quantity: 2,
//         isPurchased:'true'
//       },
//      {
//         item: 'avocado oil',
//         brand: 'avohass',
//         units: '3 liters',
//         quantity: 2,
//         isPurchased: 'true'
//        }
//   ]

//     // creates a new list that holds current list
//   const handleAddItem = () => {
//     const newList = [...list, {title: inputData}]
//     //receives new list of items
//     setList(newList);
//     setInputData('')
//     console.log(list)
//   }
//     const handleRemoveItem = (index) => {
//       const newList = [];
//       for (let i = 0; i < list.length; i++) {
//         if (index !== i) {
//           newList.push(list[i])
//         }
//       }
//       setList(newList);
//     }

//   return (
//     <div className="App">
//       <h1>Grocery Store</h1>
//         {/* input div: saves the value that is puts in */}
//       <div className="input"> 
//           <input type='text' value={inputData} onChange={(event) => setInputData(event.target.value)}> </input>  
//           <input type='submit' value='ADD' onClick={() => handleAddItem()} ></input>
//       </div>
//       <div className='list'>
//         {list.map((item, index) =>{
//           return (
//             <p onClick={() => handleRemoveItem(index)} >{item.title} </p>
//           )
//         })}
//       </div>
      
//     </div>
//   )
// }




























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