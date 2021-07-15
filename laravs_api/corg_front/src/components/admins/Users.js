import React, { Component } from 'react';

class Users extends Component {
	render() {
		return (
			<div>
				<div className="container-fluid">
					<h2>Users</h2>
					<p><span>Welcome Admin,</span> to your Users overview</p>
					<div className="container-fluid">
						<div className="row m-2">
							<div className="col-md-4 col-sm-4 col-12 mt-1">
								<div className="card mycard text-white">
									<div className="card-body text-center">
										<p><strong>2M</strong></p>
										<p><small>Total Users</small></p>
									</div>
								</div>
							</div>
							<div className="col-md-4 col-sm-4 col-12 mt-1">
								<div className="card mycard text-white">
									<div className="card-body text-center p-4">
										<p><strong>1.5M</strong></p>
										<p><small>Active Users</small></p>
									</div>
								</div>
							</div>
							<div className="col-md-4 col-sm-4 col-12 mt-1">
								<div className="card mycard text-white">
									<div className="card-body text-center p-4">
										<p><strong>1M</strong></p>
										<p><small>Today's Users</small></p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="divider bg-secondary"></div>
					<div className="row m-2">
						<div className="col-12">
							<div className="card border-0">
								<div className="card-body">
									<h6>Recents Comments</h6>
									<div className="media border p-2">
									  <img src="img_avatar3.png" alt="John Doe" className="mr-3 mt-3 rounded-circle"/>
									  <div className="media-body">
									    <p><strong>John Doe </strong><small><i>Posted on February 19, 2016</i></small></p>
									    <p>Lorem ipsum...</p>
									    <div className="ml-auto">
										    <button className="btn clickBtn bg-success m-1">Approve Comment</button>
										    <button className="btn clickBtn bg-danger m-1">Reject</button>
									  	</div>
									  </div>
									</div>
									<div className="media border p-2">
									  <img src="img_avatar3.png" alt="John Doe" className="mr-3 mt-3 rounded-circle"/>
									  <div className="media-body">
									    <p><strong>John Doe </strong><small><i>Posted on February 19, 2016</i></small></p>
									    <p>Lorem ipsum...</p>
									     <div className="ml-auto">
										    <button className="btn clickBtn bg-success m-1">Approve Comment</button>
										    <button className="btn clickBtn bg-danger m-1">Reject</button>
									  	</div>
									  </div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Users;