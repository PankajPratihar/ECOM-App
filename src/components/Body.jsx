// import React from 'react';

// const Body = ({card}) => {
//   return (
//     <>
//      <div key={card.id} className="card m-7 mx-20 p-5 border-2 max-w-80 max-h-100  ">
//      <img className="card__img max-h-40" src={card.image} alt="" />
//      <h2 className='font-black text-2xl underline underline-offset-4 my-5'>{card.category}</h2>
//         <h1 className='font-extrabold text-xl mx-5 my-8'>{card.title}</h1>
//         <p className='font-extralight mx-5 my-4'>{card.description}</p>
//         <span className='font-bold my-8 mx-5'>Price : ${card.price}</span>
//        </div>

  

//     </>
//   );
// }

// export default Body;


import React from 'react';

const Body = ({ card }) => {
  return (
    <>
    <div key={card.id} className="max-w-sm ml-20 my-8 items-center justify-center rounded  shadow-lg m-4 bg-slate-50 transition-transform duration-300 transform hover:scale-105">
      <img className="card__img max-h-40 m-4" src={card.image} alt="" />
      
      <div className="px-6 py-4 ">
      <h2 className='font-black text-2xl underline underline-offset-4 my-5'>{card.category}</h2>
        <h1 className="font-bold text-xl mb-2">{card.title}</h1>
        <p className="text-gray-700 text-base mb-4">{card.description}</p>
        <div className="flex justify-between items-center">
          
          <span className="text-gray-900 font-bold">Price : ${card.price}</span>
        </div>
      </div>
     
    </div>
   
    </>
  );
};

export default Body;

