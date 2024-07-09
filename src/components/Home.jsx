import React from 'react';
import Body from './Body';
import Footer from './Footer';

const Home = ({ cards }) => {
  return (
    <>
    <div className="mt-20">
    <div className="container flex flex-wrap mt-20 my-10 p-11">
      {cards.map((card) => (
        <Body key={card.id} card={card} />
      ))}
    </div>
    <Footer/>
    </div>
    </>
  );
};

export default Home;
