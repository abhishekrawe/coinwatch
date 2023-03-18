import React, { useState } from 'react';
import Results from './Results'; // import the Results component

export default function Search({ results }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCoins = results.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase()) || coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col justify-center mt-5">
      <input
        type="text"
        placeholder="Search coins name & symbol..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-64 px-4 py-2 mx-auto rounded-full bg-gray-100 border-none focus:outline-none focus:ring-2 focus:ring-blue-600 "
      />
      <div className="mt-5">
        <Results results={filteredCoins} /> {/* Call the Results component */}
      </div>
    </div>
  );
}
