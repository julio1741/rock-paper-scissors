import React from 'react';
import { NavLink } from 'react-router-dom'
const Round = () =>
    <div className="single-round" >
    	<div>
			<h1>Round 1</h1>
		</div>
		<h2>Player1 Name</h2>
        <div className="input-item">
	        <select className="select"
	            value="value"
	            >
	            <option value="date">Date</option>
	            <option value="amount">Amount</option>
	        </select>
	    </div>
		<div>
			<NavLink to="/"> OK </NavLink>
		</div>  
    </div>
export default Round;