import React, { useState } from 'react';
import ChartsBar from '../includes/ChartsBar';
import ChartsPie from '../includes/ChartsPie';

function Dashboard() {

	return (
		<div>
			<div className="container-fluid">
				<p><span>Welcome Admin,</span> to your dashboard</p>
				<div className="card border-0 shadow m-1">
					<div className="card-body">
						<div class="row">
							<div class="col-md-3 col-6">
								<div class="card m-1 shadow p-2">
									<h4 class="fw-bolder lh-1">0</h4>
									<p class="small lh-1">Your Blogs</p> 
								</div>
							</div>
							<div class="col-md-3 col-6">
								<div class="card m-1 shadow p-2">
									<h4 class="fw-bolder lh-1 ">0</h4>
									<p class="small lh-1">Store Items</p>
								</div>
							</div>
							<div class="col-md-3 col-6">
								<div class="card m-1 shadow p-2">
									<h4 class="fw-bolder lh-1 ">0</h4>
									<p class="small lh-1">Comments</p>
								</div>
							</div>
							<div class="col-md-3 col-6">
								<div class="card m-1 shadow p-2">
									<h4 class="fw-bolder lh-1 ">0</h4>
									<p class="small lh-1">Comments</p>
								</div>
							</div>
						
						</div>
					</div>
				</div>
				<div className="card border-0 shadow m-1">
					<div className="card-body row">
						<div className="col-12">
							<ChartsBar />
						</div>
						<div className="col-12">
							<ChartsPie />
						</div>
					</div>
				</div>
				<hr/>
				<div className="card">
					<div className="card-body">
						<h5>Media Overview</h5>
						<em className="small">Updated on Wednesday,13 May 2020</em>
						<div className="row">
							<div className="col-md-8 col-sm-8 col-xs-6">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
									tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
									quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
								</p>
							</div>
							<div className="col-md-4 col-sm-4 col-xs-6 border-left">
								<span className="pies text-center" id="pie1"><strong>40</strong></span>
							</div>
						</div>
					</div>
				</div>
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
								<span className="pies text-center" id="pie1"><strong>20</strong></span>
							</div>
						</div>
					</div>
				</div>
				<hr/>
				<div className="card">
					<div className="card-body">
						<div className="row">
							<div className="col-md-3 col-sm-3 col-xs-2">
								<h5>Users</h5>
								<span className="h5 float-right">1000000</span>
							</div>
							<div className="col-md-3 col-sm-3 col-xs-2">
								<h5>Media</h5>
								<span className="h5 float-right">1000</span>
							</div>
							<div className="col-md-3 col-sm-3 col-xs-2">
								<h5>Posts</h5>
								<span className="h5 float-right">500</span>
							</div>
							<div className="col-md-3 col-sm-3 col-xs-2">
								<h5>Addons</h5>
								<span className="h5 float-right">5</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;