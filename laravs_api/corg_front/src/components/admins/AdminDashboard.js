import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import '../assets/css/admin.css';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PostAddIcon from '@material-ui/icons/PostAdd';
import MultilineChartIcon from '@material-ui/icons/MultilineChart';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PolicyIcon from '@material-ui/icons/Policy';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import Search from '@material-ui/icons/Search';
import BusinessIcon from '@material-ui/icons/Business';
// import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Dashboard from './Dashboard';
import Settings from './Settings';
import Profile from './Profile';
import Analytics from './Analytics';
import Business from './Business';
import Media from './Media';
import Posts from './Posts';
import Policy from './Policy';
import Users from './Users';

function AdminDashboard(props){
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	const [ active, setActive ] = useState(false);
	
	const toggleSideNav=()=>{
		setActive({ active: !active });
	}

	return (
		<div>
			<Router>
				<div className={"wrapper" + (active ? " active" : "")} id="conta">
					<div className="sidebar">
						<Link to={`/admin`} className="" id="topbrand">
							<span className="title navbar-brand">Corg</span>
						</Link>
						<ul>
							<li><Link to="/admin" className="active">
									<DashboardIcon className="icon" title="Dashboard" fontSize="small" />
									<span className="title">Dashboard</span>
								</Link>
							</li>
							<li><Link to={`/admin/media`}>
								<PermMediaIcon className="icon" title="Media" fontSize="small" />
								<span className="title">Media</span>
								</Link>
							</li>
							<li><Link to={`/admin/posts`}>
									<PostAddIcon className="icon" title="Posts" fontSize="small" />
									<span className="title">Posts</span>
								</Link>
							</li>
							<li><Link to={`/admin/users`}>
									<AccountBoxIcon className="icon" title="Users" fontSize="small" />
									<span className="title">Users</span>
								</Link>
							</li>
							<li><Link to={`/admin/business`}>
									<BusinessIcon className="icon" title="Business" fontSize="small" />
									<span className="title">Business</span>
								</Link>
							</li>
							<li><Link to={`/admin/analytics`}>
									<MultilineChartIcon className="icon" title="Ad Services" fontSize="small" />
									<span className="title">Analytics</span>
								</Link>
							</li>
							<li><Link to={`/admin/setting`}>
									<SettingsIcon className="icon" title="Setting" fontSize="small" />
									<span className="title">Setting</span>
								</Link>
							</li>
							<li><Link to={`/admin/policy-update`}>
									<PolicyIcon className="icon" title="Policy" fontSize="small" />
									<span className="title">Update Policy</span>
								</Link>
							</li>
						</ul>
						<div className="userPix"><AccountCircleIcon fontSize="large"/></div>
						<div className="hamburger" onClick={toggleSideNav} id='mytoggler'>
							<div></div>
							<div></div>
							<div></div>
						</div>
					</div>
					<div className="main_container shadow">
						<nav className="navbar navbar-light bg-light">
							<div className="container-fluid">
								<ul className="nav container-fluid justify-content-end ms-3">
									{/* <li className="nav-item navSearch">
										<form className="navbar-form navbar-start">
											<div className="input-group mb-3">
												<input type="search" className="form-control" placeholder="Search... " aria-describedby="btnSearch"/>
												<button className="btn border-0" type="button" id="btnSearch">
													<Search />
												</button>
											</div>
										</form>
									</li> */}
									<li className="nav-item me-auto">
										<input type="text" id="searcher" name="search" placeholder="Search.." />
									</li>
									<li className="nav-item navNotify">
										<Link to="/notifications" className="nav-link"><NotificationsIcon />
											<sup className="badge badge-primary rounded-circle">3</sup>
										</Link>
									</li>
									<li class="nav-item dropdown navUser me-1">
										<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
											<AccountCircleIcon fontSize="small"/>
										</a>
										<ul class="dropdown-menu dropdown-menu-end profileDrop" aria-labelledby="navbarDropdown">
										<h5 className="dropdown-header">Dashboard</h5>
											<li><a href="/admin/profile" className="dropdown-item">Profile</a></li>
											<li><a href="/admin/profile-setting" className="dropdown-item">Setting</a></li>
											<div className="dropdown-divider"></div>
											<h5 className="dropdown-header">Videos</h5>
											<li><a href="/admin/users" className="dropdown-item">Help</a></li>
											<li><a href="/admin/privacy" className="dropdown-item">Privacy</a></li>
											<div className="dropdown-divider"></div>
											<li><a href="/login" className="dropdown-item">Log Out</a></li>
										</ul>
									</li>
									{/* <li class="nav-item dropdown navUser me-5">
										<PopupState variant="popover" popupId="demo-popup-menu">
											{(popupState) => (
												<React.Fragment>
													<Button {...bindTrigger(popupState)}>
														<AccountCircleIcon fontSize="small"/>
													</Button>
													<Menu {...bindMenu(popupState)}>
														<MenuItem onClick={popupState.close}>Profile</MenuItem>
														<MenuItem onClick={popupState.close}>Setting</MenuItem>
														<MenuItem onClick={popupState.close}>Help</MenuItem>
														<MenuItem onClick={popupState.close}>Privacy</MenuItem>
														<MenuItem onClick={popupState.close}>Log out</MenuItem>
													</Menu>
												</React.Fragment>
											)}
										</PopupState>
									</li>
									<li class="nav-item dropdown navUser me-5">
										<Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
											<AccountCircleIcon fontSize="small" />
										</Button>
										<Menu
											id="simple-menu"
											anchorEl={anchorEl}
											keepMounted
											open={Boolean(anchorEl)}
											onClose={handleClose}
										>
											<MenuItem onClick={handleClose}>Profile</MenuItem>
											<MenuItem onClick={handleClose}>My account</MenuItem>
											<MenuItem onClick={handleClose}>Logout</MenuItem>
										</Menu>
									</li> */}
									  	
								</ul>
							</div>
						</nav>
						<Switch>
							<Route exact path={`/admin`} component={ Dashboard } />
							<Route path={`/admin/profile`} component={ Profile } />
							<Route path={`/admin/profile-setting`} component={ Profile } />
							<Route path={`/admin/users`} component={ Users } />
							<Route path={`/admin/business`} component={ Business } />
							<Route path={`/admin/analytics`} component={ Analytics } />
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

export default AdminDashboard;