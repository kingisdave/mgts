import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import '../assets/css/admin.css';
import Dashboard from './Dashboard';
import Settings from './Settings';
import Profile from './Profile';
import Adverts from './Adverts';
import Analytics from './Analytics';
import Media from './Media';
import Posts from './Posts';
import Policy from './Policy';
import Users from './Users';

function Sidebar(){
	const [ active, setActive ] = useState(false);
	
	const toggleSideNav=()=>{
		setActive({ active: !active });
	}

	return (
		<div>
			<Router>
				<div className={"wrapper" + (active ? " active" : "")} id="conta">
					<div className="sidebar">
						<Link to={`/admin`} className="ml-3" id="topbrand"><em className="icon" aria-hidden="true">V</em>
							<span className="title navbar-brand">Video App</span>
						</Link>
						<ul>
							<li><Link to="/admin" className="active">
									<span className="icon">
										<i className="fa fa-home" aria-hidden="true"></i>
									</span>
									<span className="title">Dashboard</span>
								</Link>
							</li>
							<li><Link to={`/admin/media`}>
								<span className="icon">
									<i className="fa fa-podcast" aria-hidden="true"></i>
								</span>
								<span className="title">Media</span>
								</Link>
							</li>
							<li><Link to={`/admin/posts`}>
								<span className="icon">
									<i className="fa fa-video" aria-hidden="true"></i>
								</span>
								<span className="title">Posts</span>
								</Link>
							</li>
							<li><Link to={`/admin/users`}>
								<span className="icon">
									<i className="fa fa-users" aria-hidden="true"></i>
								</span>
								<span className="title">Users</span>
								</Link>
							</li>
							<li><Link to={`/admin/ads`}>
								<span className="icon">
									<i className="fa fa-ad" aria-hidden="true"></i>
								</span>
								<span className="title">Ad Services</span>
								</Link>
							</li>
							<li><Link to={`/admin/analytics`}>
								<span className="icon">
									<i className="fa fa-chart-line" aria-hidden="true"></i>
								</span>
								<span className="title">Analytics</span>
								</Link>
							</li>
							<li><Link to={`/admin/setting`}>
								<span className="icon">
									<i className="fa fa-toolbox" aria-hidden="true"></i>
								</span>
								<span className="title">Account Setting</span>
								</Link>
							</li>
							<li><Link to={`/admin/policy-update`}>
								<span className="icon">
									<i className="fa fa-history" aria-hidden="true"></i>
								</span>
								<span className="title">Update Policy</span>
								</Link>
							</li>
						</ul>
						<div className="hamburger" onClick={toggleSideNav} id='mytoggler'>
							<div></div>
							<div></div>
							<div></div>
						</div>
					</div>
					<div className="main_container">
						{/* <nav className="navbar navbar-expand-md navbar-light bg-light">
							<button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#collapseNav">
							<span className="navbar-toggler-icon" data-target="#collapseNav"></span>
						</button>
							<div className="collapse navbar-collapse" id="collapseNav">
								<ul className="nav ml-auto">
									<li className="nav-item m-1">
										<form className="navbar-form navbar-left">
											<div className="input-group">
												<input type="search" className="form-control" placeholder="Search"/>
												<div className="input-group-btn">
													<button className="btn btn-outline-danger bg-light border" type="submit">
														<i className="fa fa-search text-dark"></i>
													</button>
												</div>
											</div>
										</form>
									</li>
									<li className="nav-item m-1">
										<Link to="/notifications" className="nav-link"><i className="h5 fa fa-bell"></i>
											<sup className="badge badge-primary rounded-circle">3</sup>
										</Link>
									</li>
									<li className="nav-item m-1 dropdown">
										<div className="dropdown-toggle nav-link" data-toggle="dropdown">
											<span className="h4 fa fa-user-circle mr-1"></span>
											<small>Admin Atom Script</small>
										</div>
									<div className="dropdown-menu">
										<h5 className="dropdown-header">Dashboard</h5>
										<a href="/admin/profile" className="dropdown-item">Profile</a>
										<a href="/admin/profile-setting" className="dropdown-item">Setting</a>
										<div className="dropdown-divider"></div>
										<h5 className="dropdown-header">Videos</h5>
										<a href="/admin/users" className="dropdown-item">Help</a>
										<a href="/admin/privacy" className="dropdown-item">Privacy</a>
										<div className="dropdown-divider"></div>
										<a href="/login" className="dropdown-item">Log Out</a>
									</div>
									</li>  	
								</ul>
							</div>
						</nav> */}
						<Switch>
							<Route exact path={`/admin`} component={ Dashboard } />
							<Route path={`/admin/profile`} component={ Profile } />
							<Route path={`/admin/profile-setting`} component={ Profile } />
							<Route path={`/admin/users`} component={ Users } />
							<Route path={`/admin/analytics`} component={ Analytics } />
							<Route path={`/admin/ads`} component={ Adverts } />
							<Route path={`/admin/setting`} component={ Settings } />
							<Route path={`/admin/policy-update`} component={ Policy } />
							<Route path={`/admin/posts`} component={ Posts } />
							<Route path={`/admin/media`} component={ Media } />
						</Switch>
					</div>
				</div>
			</Router>
		</div>
	);
}

export default Sidebar;