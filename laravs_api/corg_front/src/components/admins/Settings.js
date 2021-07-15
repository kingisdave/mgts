import React, { Component } from 'react';

class Settings extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="container w-60">
					<div className='mr-3'>
						<h3>Settings</h3>
						<p>Welcome <span className='h6'>Admin,</span> to settings page, you can reset your profiles, posts or passwords</p>
						<em>Click this, <span className='btn btn-danger shadow'>Reset Default</span> to reset all.</em>
					</div>
					<div className="row">
						<div className="col mx-auto">
							<div className="card shadow mt-2">
								<div className="card-body">
									<h4 className="text-center">Update Password</h4>
									<p className="small text-danger"><em>Change your password here</em></p>
									<form className="form">
										
										<div className="form-group">
											<button type="submit" className="btn btn-block moreBtn text-white">Change Password</button>
										</div>
									</form>
								</div>
							</div>
						</div>

						<div className="col mx-auto">
							<div className="card shadow mt-2">
								<div className="card-body">
									<h4 className="text-center">Update Password</h4>
									<p className="small text-danger"><em>Change your password here</em></p>
									<form className="form">
										<div className="form-group">
											<input type="email" name="email" className="form-control" placeholder="Your Email" />
										</div>
										<div className="form-group">
											<input type="password" name="password1" className="form-control" placeholder="Your Password" />
										</div>
										<div className="form-group">
											<input type="password" name="password2" className="form-control" placeholder="Confirm Password" />
										</div>
										<div className="form-group">
											<button type="submit" className="btn btn-block moreBtn text-white">Change Password</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Settings;