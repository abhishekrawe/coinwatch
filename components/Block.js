import React from 'react'

export default function Block({ result }) {
  return (
      <div className="p-4 border rounded-lg shadow-md mb-4">
        <div className="flex justify-between mb-2 bg-gray-800 rounded-lg p-2"> 
          <h1 className="text-lg font-bold text-cyan-500">Rank {result.market_cap_rank}</h1>
          <h1 className="text-lg font-bold text-blue-500">{result.name}</h1>
          <h1 className="text-lg font-bold text-green-500">Price : $ {result.current_price.toLocaleString()}  </h1>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between items-center">
          <img className="w-20 h-20 mr-4" src={result.image} alt={result.name} />
          <table className="w-full border-collapse border-gray-300 my-4">
            <tbody>
              <tr className='hidden lg:table-row'>
                <td className="font-medium pr-2">Symbol:</td>
                <td className='text-violet-400'>{result.symbol.toUpperCase()}</td>
                <td className="font-medium pr-2 lg:pl-4">Total volume:</td>
                <td className='text-orange-600'>{result.total_volume.toLocaleString()}</td> 
              </tr>
              
              <tr className='hidden lg:table-row'>
                <td className="font-medium pr-2">Market Cap:</td>
                <td className='text-green-500'>{result.market_cap.toLocaleString()} USD</td>
                <td className="font-medium pr-2 lg:pl-4">Price Change(24hrs):</td>
                <td className='text-red-600'>{result.price_change_24h.toLocaleString()}</td> 
              </tr>

            <tr class="lg:hidden">
              <td class="font-medium pr-2">Symbol:</td>
              <td class='text-violet-400'>{result.symbol.toUpperCase()}</td>
            </tr>

            <tr class="lg:hidden">
              <td class="font-medium pr-2">Market Cap:</td>
              <td class='text-green-500'>{result.market_cap.toLocaleString()} USD</td>
            </tr>

            <tr class="lg:hidden">
              <td class="font-medium pr-2 lg:pl-4">Total volume:</td>
              <td class='text-orange-600'>{result.total_volume.toLocaleString()}</td>
            </tr>

            <tr class="lg:hidden">
              <td class="font-medium pr-2 lg:pl-4">Price Change(24hrs):</td>
              <td class='text-red-600'>{result.price_change_24h.toLocaleString()}</td>
            </tr>
              
            </tbody>
          </table>
        </div>
      </div>
  )
}