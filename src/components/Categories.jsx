import React from 'react';

const Categories = ({ categories, setFilter }) => {
  return (
    <div className="w-full md:w-1/4 p-4">
      <h2 className="font-bold text-xl mb-4">Categories</h2>
      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li key={index} className="cursor-pointer hover:underline" onClick={() => setFilter(category)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
