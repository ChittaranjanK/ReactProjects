import React from 'react'
import Card from './Card';

const cardList = ({robots}) =>{  // argument equivalent to const {robots} = props ;
	return (
		<div>
	     {
	     	robots.map((users , i)=>{
	          return(<Card 
	          	       key={i} 
	          	       id={robots[i].id} 
	          	       name={robots[i].name} 
	          	       email={robots[i].email} 
	          	     />);
		      })
	     }
	     </div>
	);
}

export default cardList;
