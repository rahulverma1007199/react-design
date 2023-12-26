'use client'
import { debounce } from '@/utils/debounce';
import React, { useState } from 'react'

type Props = {}

const DebouncedInput:React.FC = (props: Props) => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = debounce((term: string) => {
        console.log('Performing search for:', term);
        // Add your search logic or any other action here
      }, 500); // Set the debounce delay in milliseconds

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newTerm = event.target.value;
        setSearchTerm(newTerm);
    
        // Call the debounced function with the updated term
        handleSearch(newTerm);
      };

  return (
    <>
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={handleChange}
    />
    </>
  )
}

export default DebouncedInput