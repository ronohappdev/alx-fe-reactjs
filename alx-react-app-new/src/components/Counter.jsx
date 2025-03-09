import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Counter App</h2>
      
      <div className="text-6xl font-bold mb-6">{count}</div>
      
      <div className="flex gap-4">
        <button 
          onClick={() => setCount(count - 1)} 
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          Decrement
        </button>
        
        <button 
          onClick={() => setCount(0)} 
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
        >
          Reset
        </button>
        
        <button 
          onClick={() => setCount(count + 1)} 
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default Counter;