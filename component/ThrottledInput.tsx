import { throttle } from '@/utils/throttle';
import React, { useState } from 'react'

type Props = {}

const ThrottledInput:React.FC = (props: Props) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = throttle((term: string) => {
        console.log('Performing search for:', term);
        // Add your search logic or any other action here
      }, 500); // Set the throttle limit in milliseconds
    
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newTerm = event.target.value;
        setSearchTerm(newTerm);
    
        // Call the throttled function with the updated term
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

export default ThrottledInput