import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-secondary mb-3 p-2">
			<Link to="/" className='text-decoration-none text-light'>
				<span className="navbar-brand mb-0 h1 text-light">Contact list</span>
			</Link>
			
		</nav>
	);
};
