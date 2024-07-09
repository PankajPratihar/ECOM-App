
// import React from 'react';
// import {NavLink} from 'react-router-dom'

// const Navbar = ({ setQuery }) => {
//   return (
//     <nav className="flex justify-around bg-indigo-900 text-white py-4">
//       <div className="logo">
//         <span className="font-bold text-xl mx-8">
//           cTask
//         </span>
//       </div>
//       <ul className="flex gap-8 mx-9">
//         <div className="input-box  text-black ">
//           <input 
//             type="search"
//             name="search-form"
//             id="search-form"
//             className="search-input bg-slate-300 p-1 rounded-lg"
//             onChange={(e) => setQuery(e.target.value)}
//             placeholder="Search product"
//           />
//         </div>
//         <NavLink className={(e)=>{return e.isActive?"red":""}} to='/'><li className="cursor-pointer hover:font-bold transition-all">
//           Home
//         </li></NavLink>


//         <NavLink className={(e)=>{return e.isActive?"red":""}} to='/about'><li className="cursor-pointer hover:font-bold transition-all">
//           About
//         </li></NavLink>




//         <NavLink className={(e)=>{return e.isActive?"red":""}} to='/contactus'><li className="cursor-pointer hover:font-bold transition-all">
//           Contact Us
//         </li></NavLink>
        
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


//real


// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const Navbar = ({ setQuery }) => {
//   return (
//     <nav className="flex justify-around bg-indigo-900 text-white py-4">
//       <div className="logo">
//         <span className="font-bold text-xl mx-8">
//           cTask
//         </span>
//       </div>
//       <ul className="flex gap-8 mx-9">
//         <div className="input-box text-black">
//           <input 
//             type="search"
//             name="search-form"
//             id="search-form"
//             className="search-input bg-slate-300 p-1 rounded-lg"
//             onChange={(e) => setQuery(e.target.value)}
//             placeholder="Search product"
//           />
//         </div>
//         <NavLink to="/" className={({ isActive }) => (isActive ? "underline underline-offset-4 text-blue-600" : "text-white")}>
//           <li className="cursor-pointer hover:font-bold transition-all">
//             Home
//           </li>
//         </NavLink>
//         <NavLink to="/about" className={({ isActive }) => (isActive ? "text-red-500 underline underline-offset-4" : "text-white")}>
//           <li className="cursor-pointer hover:font-bold transition-all">
//             About
//           </li>
//         </NavLink>
//         <NavLink to="/contactus" className={({ isActive }) => (isActive ? "text-red-500 underline underline-offset-4" : "text-white")}>
//           <li className="cursor-pointer hover:font-bold transition-all">
//             Contact Us
//           </li>
//         </NavLink>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;




// import React, { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';

// const Navbar = ({ setQuery, setFilter }) => {
//   const [categories, setCategories] = useState([]);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const fetchCategories = async () => {
//     try {
//       let response = await fetch("https://fakestoreapi.com/products/categories");
//       let data = await response.json();
//       setCategories(data);
//     } catch (error) {
//       console.error('Error fetching categories:', error);
//     }
//   };

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   return (
//     <nav className="flex justify-around bg-indigo-900 text-white py-4 relative ">
//       <div className="logo">
//         <span className="font-bold text-xl mx-8">
//           cTask
//         </span>
//       </div>
//       <ul className="flex gap-8 mx-9 relative">
//         <div className="relative">
//           <button 
//             className="bg-slate-300 text-black p-2 rounded-lg" 
//             onClick={() => setDropdownOpen(!dropdownOpen)}
//           >
//             Categories
//           </button>
//           {dropdownOpen && (
//             <ul className="absolute bg-white text-black rounded-lg shadow-lg mt-2 w-48 z-50">
//               {categories.map((category, index) => (
//                 <li 
//                   key={index} 
//                   className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
//                   onClick={() => {
//                     setFilter(category);
//                     setDropdownOpen(false);
//                   }}
//                 >
//                   {category}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//         <div className="input-box text-black">
//           <input 
//             type="search"
//             name="search-form"
//             id="search-form"
//             className="search-input bg-slate-300 p-1 rounded-lg"
//             onChange={(e) => setQuery(e.target.value)}
//             placeholder="Search product"
//           />
//         </div>
//         <NavLink className={(e) => (e.isActive ? "font-bold" : "")} to='/'>
//           <li className="cursor-pointer hover:font-bold transition-all">Home</li>
//         </NavLink>
//         <NavLink className={(e) => (e.isActive ? "font-bold" : "")} to='/about'>
//           <li className="cursor-pointer hover:font-bold transition-all">About</li>
//         </NavLink>
//         <NavLink className={(e) => (e.isActive ? "font-bold" : "")} to='/contactus'>
//           <li className="cursor-pointer hover:font-bold transition-all">Contact Us</li>
//         </NavLink>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;




import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ setQuery, setFilter }) => {
  const [categories, setCategories] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const fetchCategories = async () => {
    try {
      let response = await fetch("https://fakestoreapi.com/products/categories");
      let data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-indigo-900 to-purple-700 text-white py-4 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="logo">
          <span className="font-bold text-2xl">
            cTask
          </span>
        </div>
        <ul className="flex gap-8 items-center">
          <div className="relative">
            <button 
              className="bg-white text-indigo-900 p-2 rounded-lg focus:outline-none hover:bg-gray-200 transition"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Categories
            </button>
            {dropdownOpen && (
              <ul className="absolute bg-white text-black rounded-lg shadow-lg mt-2 w-48 z-10">
                {categories.map((category, index) => (
                  <li 
                    key={index} 
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      setFilter(category);
                      setDropdownOpen(false);
                    }}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="input-box text-black">
            <input 
              type="search"
              name="search-form"
              id="search-form"
              className="search-input bg-white p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search product"
            />
          </div>
          <NavLink className={(e) => (e.isActive ? "font-bold" : "")} to='/'>
            <li className="cursor-pointer hover:font-bold transition-all">Home</li>
          </NavLink>
          <NavLink className={(e) => (e.isActive ? "font-bold" : "")} to='/about'>
            <li className="cursor-pointer hover:font-bold transition-all">About</li>
          </NavLink>
          <NavLink className={(e) => (e.isActive ? "font-bold" : "")} to='/contactus'>
            <li className="cursor-pointer hover:font-bold transition-all">Contact Us</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
