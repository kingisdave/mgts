import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
	
	// ComponentDidMount() {
	// 	$(window).scroll(function(){
	// 		$('nav').toggleClass('scrolled', $(this).scrollTop() > 500);
	// 	});
	// }
	const handleLogOut=()=>{
		localStorage.clear();
		props.setUser(null)
	}
	let buttons;
	if(props.userDetails){
		buttons =(
			// <li className="nav-item">
			// 	<Link className="nav-link" to={"/"}>{props.userDetails.firstName +" "+props.userDetails.lastName }</Link>

			// </li>
			<li className="nav-item dropdown mx-auto">
				<Link className="nav-link dropdown-toggle" to={"#"} id="dropNavLink" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					{props.userDetails.firstName +" "+props.userDetails.lastName }
				</Link>
				<div className="dropdown-menu" aria-labelledby="dropNavLink">
					<Link className="dropdown-item" to={"/user"}>Profile</Link>
					<div className="dropdown-divider"></div>
					<Link className="dropdown-item" to={"/"} onClick={handleLogOut}>Logout</Link>
				</div>
			</li>
		)
	} else {
		buttons =(
			<li className="nav-item mx-auto ">
				<Link className="nav-link btn btn-outline-dark btn-sm" to={"/login"}>Sign In</Link>
			</li>
		)
	}

	return (
		<nav className="navbar navbar-expand-sm bg-default backColor sticky-top">
			<div className="container">
				<Link className="navbar-brand navBrand" to={"/"}>CORG</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-lg-0">
						<li className="nav-item mx-1">
							<Link className="nav-link navyLi active" aria-current="page" to={"/"}>Home</Link>
						</li>
						<li className="nav-item mx-1">
							<Link className="nav-link navyLi" to={"/about"}>About</Link>
						</li>
						<li className="nav-item mx-1">
							<Link className="nav-link navyLi" to={"/"}>Organisation</Link>
						</li>
						<li className="nav-item mx-1">
							<Link className="nav-link navyLi" to="/contact">Contact Us</Link>
						</li>
					</ul>
					<ul className="navbar-nav ms-auto mb-lg-0">
						{ buttons }
						{/* <li className="nav-item">
							<Link className="nav-link me-2" aria-current="page" to="/login">Sign in</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link me-2" aria-current="page" to="/register" >Sign up</Link>
						</li> */}
					</ul>
				</div>
			</div>
		</nav>
	);
	
}

export default Navbar;