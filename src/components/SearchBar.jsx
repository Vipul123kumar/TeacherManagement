
// src/components/SearchBar.jsx
import React from 'react';
export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search teachers..."
      value={value}
      onChange={e => onChange(e.target.value)}
      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
    />
  );
}
