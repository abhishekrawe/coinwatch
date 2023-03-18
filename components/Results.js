import React from 'react'
import Block from './Block';

export default function Results({ results }) {
  return (
    <div className='px-4 md:px-8 lg:px-12 xl:px-16'>
      {results.map ((result) => (
        <Block key = {result.id} result = {result}/>
      ))}
    </div>
  )
}