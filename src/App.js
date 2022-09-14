// import Button from "./Button";
// import styles from "./App.module.css";


// function Hello(){
//   function byeFn(){
//     console.log("Bye :/");
//   }
//   function hiFn(){
//     console.log("Created :)");
//     return byeFn;
//   }
//   useEffect(() => {
//     console.log("hi :)");
//     return () => console.log("bye :/");
//   },[]);
//   useEffect(function(){
//     console.log("hi :)");
//     return function(){
//       console.log("bye :/")
//     }
//   },[]);
//   return(
//     <div>
//       <h1> Hello! </h1>
//     </div>
//   );
// }

// function App() {
//   const [toDo, setToDo] = useState("");
//   const [toDos, setToDos] = useState([]);
//   const onChange = (event) => setToDo(event.target.value);
//   const onSubmit = (event) => {
//     event.preventDefault();
//     if(toDo === ""){
//       return;
//     }
//     setToDos((currnetArray) => [...currnetArray,toDo]);
//     setToDo("");
//   };
//   return(
//     <div>
//       <h1>My To Dos ({toDos.length})</h1>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..." />
//         <button>Add To Do</button>
//       </form>
//       <hr />
//       <ul>
//         {toDos.map((item, index) => <li key={index}> {item}</li>)}
//       </ul>
//     </div>
//   );

// }
// https://api.coinpaprika.com/v1/tickers

// function App(){
//   const [loading,setLoading] = useState(true);
//   const [coins,setCoins] = useState([]);
//   useEffect(() => {
//     fetch("https://api.coinpaprika.com/v1/tickers")
//     .then((response) => response.json())
//     .then((json) => {
//       setCoins(json);
//       setLoading(false);
//     });
//   },[]);
//   return (
//     <div>
//       <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
//       {loading ? <strong>Loading...</strong> :
//       <select>
//       {coins.map((coin) => (
//         <option>
//           {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
//         </option>
//       ))}
//       </select>
//       }
      
//     </div>
//   );  
// }
// export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App(){
  return (
    <Router>
      <Routes>        
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        <Route path={`${process.env.PUBLIC_URL}/movie/:id`} element={<Detail />} />
        <Route path={`${process.env.PUBLIC_URL}/hello`} element={<h1>Hello</h1>} />
      </Routes>
    </Router>
  );
}
export default App;