import React, { Component } from 'react';

class Profile extends Component {
	render() {
		return (
			<div>
				<div className="container-fluid">
					<h2>Profile</h2>
					<p><span>Welcome Admin,</span> to your Profile</p>
					<div className="card">
						<div className="card-body">
							<h5>Profile</h5>
							<em className="small">Updated on Wednesday,13 May 2020</em>
							<div className="row">
								<div className="col-md-8 col-sm-8 col-xs-6">
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
										tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
										quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
									</p>
								</div>
								<div className="col-md-4 col-sm-4 col-xs-6">
									<div className="rounded-circle" id="pie1">40</div>
								</div>
							</div>
						</div>
					</div>
					<div className="divider"></div>
					<div className="card">
						<div className="card-body">
							<h5>Video Posts</h5>
							<em className="small">Updated on 2 days ago</em>
							<div className="row">
								<div className="col-md-8 col-sm-8 col-xs-6">
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
										tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
										quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
									</p>
								</div>
								<div className="col-md-4 col-sm-4 col-xs-6">
									<div className="rounded-circle" id="pie1">20</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Profile;