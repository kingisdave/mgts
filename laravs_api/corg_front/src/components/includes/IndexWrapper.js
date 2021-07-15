import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class IndexWrapper extends Component {
	
	// ComponentDidMount() {
	// 	$(window).scroll(function(){
	// 		$('nav').toggleClass('scrolled', $(this).scrollTop() > 500);
	// 	});
	// }

	render() {
		return (
			<nav className="navbar navbar-expand-md navbar-dark bg-default backColor sticky-top">
				<div className="container">
					<Link className="navbar-brand navBrand" to={"/"}>CORG</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link className="nav-link active" aria-current="page" to={"/"}>HOME</Link>
							</li>
							<li className="nav-item ms-auto">
								<Link className="nav-link" to={"/login"}><small>SIGN IN</small></Link>
							</li>
							<li className="nav-item mx-auto">
								<Link className="nav-link" to={"/register"}><small>SIGN UP</small></Link>
							</li>
						</ul>
						{/* <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
							<li class="nav-item">
								<Link class="nav-link me-2" aria-current="page" to="/login">Sign in</Link>
							</li>
							<li class="nav-item">
								<Link class="nav-link me-2" aria-current="page" to="/register" >Sign up</Link>
							</li>
						</ul> */}
					</div>
				</div>
			</nav>
		);
	}
}

export default IndexWrapper;