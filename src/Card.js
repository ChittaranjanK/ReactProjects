import React from 'react';

const card = (props) =>{
	const {id , name , email} = props ; //destructering
	return(
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
		  <img alt='robots' src={`https://robohash.org/${id}?150*150`} />
		  <div>
		   <h2>{name}</h2>
		   <p>{email}</p>
		  </div>
		</div>
	);
 }
export default card
