import React, { useState } from 'react';
import Results from './Results';

export default function Search({ results }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('market_cap_desc');
  const [filterOption, setFilterOption] = useState('all');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (event) => {
    setSortOption(event.target.value);
  };

  const handleFilter = (event) => {
    setFilterOption(event.target.value);
  };

  const filteredCoins = results.filter((coin) => {
    if (filterOption === 'all') {
      return true;
    } else if (filterOption === 'coins') {
      return coin.id.includes('coin-');
    } else if (filterOption === 'tokens') {
      return coin.id.includes('token-');
    }
  }).filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    coin.symbol.toUpperCase().includes(searchTerm.toUpperCase())
  ).sort((a, b) => {
    if (sortOption === 'market_cap_desc') {
      return b.market_cap - a.market_cap;
    } else if (sortOption === 'market_cap_asc') {
      return a.market_cap - b.market_cap;
    } else if (sortOption === 'price_desc') {
      return b.current_price - a.current_price;
    } else if (sortOption === 'price_asc') {
      return a.current_price - b.current_price;
    } else if (sortOption === 'price_change_desc') {
      return b.price_change_percentage_24h - a.price_change_percentage_24h;
    } else if (sortOption === 'price_change_asc') {
      return a.price_change_percentage_24h - b.price_change_percentage_24h;
    }
  });



  return (
    <div className="flex flex-col justify-center mt-5">
      <input
          type="text"
          placeholder="Search coins name & symbol..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-64 px-4 py-2 mx-auto rounded-full bg-gray-100 border-none focus:outline-none focus:ring-2 focus:ring-blue-600 "
        />
      <div className='flex flex-col md:flex-row justify-between items-center mb-5 mt-5'> 
        <div className="flex flex-col md:flex-row items-center m-10">
          <span className="mr-2 font-medium md:mr-4">Sort by:</span>
          <select value={sortOption} onChange={handleSort} className="mr-2 md:mr-4 rounded-full">
            <option value="market_cap_desc">Market Cap (Descending)</option>
            <option value="market_cap_asc">Market Cap (Ascending)</option>
            <option value="price_desc">Price (Descending)</option>
            <option value="price_asc">Price (Ascending)</option>
            <option value="price_change_desc">Price Change (24h, Descending)</option>
            <option value="price_change_asc">Price Change (24h, Ascending)</option>
          </select>
          <span className="mr-2 font-medium md:mr-4">Filter by:</span>
          <select value={filterOption} onChange={handleFilter} className="rounded-full">
            <option value="all">All</option>
            <option value="coins">Coins</option>
            <option value="tokens">Tokens</option>
          </select>
        </div>
      </div>

      <div className="mt-5">
        <Results results={filteredCoins} />
      </div>
    </div>
  );
}
