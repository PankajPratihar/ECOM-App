
// import { useState, useEffect } from 'react';
// import './App.css';
// import Navbar from './components/Navbar';
// import {RouterProvider,createBrowserRouter} from 'react-router-dom';
// import Body from './components/Body';
// import Home from './components/Home';
// import About from './components/About';
// import ContactUs from './components/ContactUs'


// function App() {
//   const [cards, setCards] = useState([]);
//   const [query, setQuery] = useState("");

//   const fetchData = async () => {
//     try {
//       let response = await fetch("https://fakestoreapi.com/products");
//       let data = await response.json();
//       setCards(data);
//       console.log(data); // Debug: Log the data to verify the response
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const search_parameters = Object.keys(Object.assign({}, ...cards));

//   const search = (cards) => {
//     return cards.filter((card) =>
//       search_parameters.some((parameter) =>
//         card[parameter].toString().toLowerCase().includes(query.toLowerCase())
//       )
//     );
//   };


//   const router=createBrowserRouter([
//     {
//       path:"/",
//       element:<><Navbar/><Home/></>
//     },
//     {
//       path:"/contactus",
//       element:<><Navbar/><ContactUs/></>
//     },
//     {
//       path:"/about",
//       element:<><Navbar/><About/></>
//     },
   
//    ])

//   return (
//     <>
//       <Navbar setQuery={setQuery} />
//       <RouterProvider router={router}/>
//       <div className="container flex flex-wrap">
//         {search(cards).map((card) => (
//           <Body key={card.id} card={card} />
//         ))}
//       </div>
      
//     </>
//   );
// }

// export default App;



// import { useState, useEffect } from 'react';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import './App.css';
// import Navbar from './components/Navbar';
// import Body from './components/Body';
// import Home from './components/Home';
// import About from './components/About';
// import ContactUs from './components/ContactUs';

// function App() {
//   const [cards, setCards] = useState([]);
//   const [query, setQuery] = useState("");
//   const location = useLocation();

//   const fetchData = async () => {
//     try {
//       let response = await fetch("https://fakestoreapi.com/products");
//       let data = await response.json();
//       setCards(data);
//       console.log(data); // Debug: Log the data to verify the response
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const search_parameters = Object.keys(Object.assign({}, ...cards));

//   const search = (cards) => {
//     return cards.filter((card) =>
//       search_parameters.some((parameter) =>
//         card[parameter].toString().toLowerCase().includes(query.toLowerCase())
//       )
//     );
//   };

//   return (
//     <>
//       <Navbar setQuery={setQuery} />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contactus" element={<ContactUs />} />
//       </Routes>
//       {location.pathname === '/' && (
//         <div className="container flex flex-wrap">
//           {search(cards).map((card) => (
//             <Body key={card.id} card={card} />
//           ))}
//         </div>
//       )}
//     </>
//   );
// }

// export default App;




//real


// import { useState, useEffect } from 'react';
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import './App.css';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import About from './components/About';
// import ContactUs from './components/ContactUs';

// function App() {
//   const [cards, setCards] = useState([]);
//   const [query, setQuery] = useState("");

//   const fetchData = async () => {
//     try {
//       let response = await fetch("https://fakestoreapi.com/products");
//       let data = await response.json();
//       setCards(data);
//       console.log(data); // Debug: Log the data to verify the response
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const search_parameters = Object.keys(Object.assign({}, ...cards));

//   const search = (cards) => {
//     return cards.filter((card) =>
//       search_parameters.some((parameter) =>
//         card[parameter].toString().toLowerCase().includes(query.toLowerCase())
//       )
//     );
//   };

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <><Navbar setQuery={setQuery} /><Home cards={search(cards)} /></>
//     },
//     {
//       path: "/about",
//       element: <><Navbar setQuery={setQuery} /><About /></>
//     },
//     {
//       path: "/contactus",
//       element: <><Navbar setQuery={setQuery} /><ContactUs /></>
//     },
//   ]);

//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   );
// }

// export default App;








// import { useState, useEffect } from 'react';
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import './App.css';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import About from './components/About';
// import ContactUs from './components/ContactUs';
// import Categories from './components/Categories';
// import Body from './components/Body';

// function App() {
//   const [cards, setCards] = useState([]);
//   const [query, setQuery] = useState("");
//   const [categories, setCategories] = useState([]);
//   const [filter, setFilter] = useState("");

//   const fetchData = async () => {
//     try {
//       let response = await fetch("https://fakestoreapi.com/products");
//       let data = await response.json();
//       setCards(data);

//       const uniqueCategories = [...new Set(data.map(item => item.category))];
//       setCategories(uniqueCategories);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const search_parameters = Object.keys(Object.assign({}, ...cards));

//   const search = (cards) => {
//     return cards.filter((card) =>
//       search_parameters.some((parameter) =>
//         card[parameter].toString().toLowerCase().includes(query.toLowerCase())
//       ) && (!filter || card.category === filter)
//     );
//   };

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: (
//         <>
//           <Navbar setQuery={setQuery} />
//           <div className="flex">
//             <Categories categories={categories} setFilter={setFilter} />
//             <div className="container flex flex-wrap justify-center">
//               {search(cards).map((card) => (
//                 <Body key={card.id} card={card} />
//               ))}
//             </div>
//           </div>
//         </>
//       )
//     },
//     {
//       path: "/about",
//       element: <><Navbar setQuery={setQuery} /><About /></>
//     },
//     {
//       path: "/contactus",
//       element: <><Navbar setQuery={setQuery} /><ContactUs /></>
//     },
//   ]);

//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   );
// }

// export default App;



import { useState, useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  const [cards, setCards] = useState([]);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");

  const fetchData = async () => {
    try {
      let response = await fetch("https://fakestoreapi.com/products");
      let data = await response.json();
      setCards(data);
      console.log(data); // Debug: Log the data to verify the response
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const search_parameters = Object.keys(Object.assign({}, ...cards));

  const search = (cards) => {
    return cards.filter((card) =>
      search_parameters.some((parameter) =>
        card[parameter].toString().toLowerCase().includes(query.toLowerCase())
      ) && (!filter || card.category === filter)
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar setQuery={setQuery} setFilter={setFilter} />
          <div className="container flex flex-wrap justify-center">
            {search(cards).map((card) => (
              <Body key={card.id} card={card} />
            ))}
          </div>
          <Footer/>
        </>
      )
    },
    {
      path: "/about",
      element: <><Navbar setQuery={setQuery} setFilter={setFilter} /><About /></>
    },
    {
      path: "/contactus",
      element: <><Navbar setQuery={setQuery} setFilter={setFilter} /><ContactUs /></>
    },
  ]);

  return (
    <>
    <div className="mt-20">
      <RouterProvider router={router} />
    
      </div>
    </>
  );
}

export default App;
