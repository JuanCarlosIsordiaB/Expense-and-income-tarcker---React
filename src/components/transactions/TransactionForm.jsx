import React, { useState } from 'react'
import { useGlobalState } from '../../context/GlobalState';

export const TransactionForm = () => {

  const { addTransaction} = useGlobalState()
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID(), 
      description,
      amount: +amount
    });

    setAmount(0);
    setDescription('');
    this.render();
    
  }

  return (
    <div>
      <form 
        action=""
        onSubmit={handleSubmit}
      >
        <input 
          type="text" 
          placeholder='Enter a Description' 
          onChange={(e) => setDescription(e.target.value)}
          min={0}
          className='bg-zinc-600 text-white px-3 py-2 rounded-md block mb-2 w-full'
          value={description}
        />
        <input 
          type="number" 
          placeholder='Enter an Amount'
          step={0.01} //Incr
          onChange={(e) => setAmount(e.target.value)}
          className='bg-zinc-600 text-white px-3 py-2 rounded-md block mb-2 w-full'
          value={amount}
        />
        <button
          className='bg-indigo-700 text-white px-3 py-2 rounded-md block mb-2'

        >Add Transaction</button>

      </form>
    </div>
  )
}
