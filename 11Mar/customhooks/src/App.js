// import  {useAxiosGet}  from "./useAxiosGet";

// function App() {

//              const products = useAxiosGet("https://fakestoreapi.com/products");
//               console.log("data", products);
      
//               const displayData = () =>{
//                       var res = products.map ((product) =>{
//                               return <li key={product.title}>{product.title}</li>  
//                        })
//                        return res;
//               }

//     return (
//     <div className="App">
//          <h1>Data</h1>
//          <ul>
//                  {displayData()}
//          </ul>
//     </div>
//   );
// }

// export default App;


import { useState,useCallback } from "react";

import Todos from "./Todos";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  // const addTodo = () => {
  //   setTodos((t) => [...t, "New Todo"]);
  // };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};


export default App;