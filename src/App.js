import React from 'react';
import PropTypes from "prop-types";

const foodIlike = [
  {
    name : "kimchi",
    picture : "https://craftlog.com/m/i/6171598=s1280=h960.webp",
    rating : 1
  },
  {
    name : "Ramen",
    picture : "https://file.mk.co.kr/meet/neds/2017/09/image_readtop_2017_587233_15042337473013492.jpg",
    rating : 2
 
  }
];

function Food({name, picture, rating}){
  return(
  <div>
      <h2> I like {name} </h2>
      <h4> {rating} /5.0</h4>
      <img src = {picture} alt={name} />
  </div> 
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.string.isRequired                        
};

function App() {
  return(
     <div>
        {foodIlike.map(dish => (
          <Food key = {dish.id} 
          name={dish.name} 
          picture={dish.picture} 
          rating = {dish.rating}/>
        ))}
    </div>
  );  
}

export default App;
