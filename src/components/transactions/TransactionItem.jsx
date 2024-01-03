import { useGlobalState } from "../../context/GlobalState";

export const TransactionItem = ({transaction}) => {

    const { deleteTransaction} = useGlobalState();

  return (
    <li 
        className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center"
    >
        <p className="text-sm">{transaction.description}</p>
        <div className="ml-5">
            <span>${transaction.amount}</span>
            <button
                className="bg-red-400 rounded-md p-1 ml-2"
                onClick={() => {deleteTransaction(transaction.id)}}
            >Delete</button>
        </div>
        
    </li>
  )
}