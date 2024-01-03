//import { useContext } from "react";
//import { Context } from "../context/GlobalState";
import { useGlobalState } from "../context/GlobalState";




export const Balance = () => {

  //const data = useContext(Context);
  const {transactions} = useGlobalState();

  const amounts = transactions.map(transaction => 
    transaction.amount 
  );
  const total = amounts.reduce((acc,item) => (acc += item), 0).toFixed(2);

  
  
  return (
    <div className="flex justify-between">
      <h2 className="text-xl">Your Balance:</h2>
      <h1 className="text-2xl font-bold">${total}</h1>
      
    </div>
    
    
  )
}
