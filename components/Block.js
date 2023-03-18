import React from 'react'

export default function Block({ result }) {
  return (
      <div className="p-4 border rounded-lg shadow-md mb-4">
        <div className="flex justify-between mb-2"> 
          <h1 className="text-grey-500 font-extrabold">Rank {result.market_cap_rank}</h1>
          <h1 className="text-lg font-bold">{result.name}</h1>
          <h1 className="text-lg font-bold">Price : $ {result.current_price.toLocaleString()}  </h1>
        </div>
        <div className="flex justify-between items-center">
          <img className="w-20 h-20 mr-4" src={result.image} alt={result.name} />
          <table className="w-full border-collapse border-gray-300 my-4">
            <tbody>
              <tr>
                <td className="font-medium pr-2">Symbol:</td>
                <td>{result.symbol.toUpperCase()}</td>
              </tr>
              
              <tr>
                <td className="font-medium pr-2">Market Cap:</td>
                <td>{result.market_cap.toLocaleString()} USD</td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
  )
}