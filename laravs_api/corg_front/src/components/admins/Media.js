import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { withFormik } from 'formik';
import Input from '../includes/Input';

const fields = [
	{ name: 'title', type: 'text', placeholder: 'Title' },
	{ name: 'duration', type: 'text', placeholder: 'Duration' },
	{ name: 'actors', type: 'text', placeholder: 'Actor(s)' },
	{ name: 'genre', type: 'text', placeholder: 'Genre' },
	{ name: 'media', type: 'file', placeholder: 'Media' },

]

class Media extends Component {
	
	mediaForm=(e)=>{

	}

	render() {

		return (
			<React.Fragment>
				<div className="container w-80 mx-auto">
					<div className='mr-3'>
						<h3>Media Gallery</h3>
						<p>Welcome <strong>Admin,</strong> to your Media Gallery</p>
						<div className="container-fluid">
							<div className="row mb-2">
								<div className="col-12">
									<div className="card">
										<div className="card-body">
											<h6>Media Upload</h6>
											<small><em>Upload the media file and information here</em></small>

											<p className="text-center mt-1">
												<button className="clickBtn pl-2 pr-2 border-rounded" data-toggle="modal" data-target="#myModal">Click this link to upload your media file</button>
											</p>
										
											<div className="modal fade" id="myModal">
											  <div className="modal-dialog">
											    <div className="modal-content">
   
											      <div className="p-2">
											      	<h6 className="float-left">Upload your media information</h6>
											        <button type="button" className="close float-right" data-dismiss="modal">&times;</button>
											      </div>

											      <div className="modal-body p-4">
											        <form className="form" onSubmit={this.mediaForm}>
															{
																fields.map((f, i) =>(
																	<Input 
																		key={ i }
																		{...f}
																		onChange={this.props.handleChange}
																		onBlur={this.props.handleBlur}
																		touched={this.props.touched[f.name]}
																		errors={this.props.errors[f.name]}									
																	/>
																))
															}
																<div className="form-group">
																{(this.props.isValid === true && this.props.dirty) ? (
																	<button type="submit" className="btn btn-block clickBtn pt-1 pb-1">Submit</button>
																	) : (
																	<button type="submit" className="btn btn-block clickBtn pt-1 pb-1" disabled>Submit</button>
																	)
																}
																</div>
															</form>
											      </div>

											    </div>
											  </div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="divider mb-2"></div>
							<div className="row">
								<div className="col-12">
									<div className="card">
										<div className="card-body mytable">
											<h6>Uploaded Media</h6>
											<table className="table table-striped table-responsive table-bordered">
												<thead className="thead-dark">
													<tr>
														<th>S/N</th>
														<th>Media</th>
														<th>Title</th>
														<th>Duration</th>
														<th>Actors</th>
														<th>Genre</th>
														<th>Description</th>
														<th>Ratings</th>
														<th>Operations</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>1</td>
														<td><video src="" controls/></td>
														<td>Expendables 1</td>
														<td>20:20</td>
														<td className="small">Arnold Schwazeneger, Jason Statham, Jean Claude Vandamme, Syvester Stallon</td>
														<td>Action, Thriller</td>
														<td>Some example text..</td>
														<td>4.9</td>
														<td><button className="btn btn-success">Post</button>
															<button className="btn btn-danger">Delete</button>
														</td>
													</tr>
													{/*<tr>
														<td>2</td>
														<td><video src="" controls/></td>
														<td>Expendables 2</td>
														<td>20:20</td>
														<td className="small">Jason Statham, Jean Claude Vandamme, Syvester Stallon, Arnold Schwazeneger</td>
														<td>Action, Thriller</td>
														<td>Some example text..</td>
														<td>4.9</td>
														<td><button className="btn btn-success">Post</button>
															<button className="btn btn-danger">Delete</button>
														</td>
													</tr>
													<tr>
														<td>3</td>
														<td><video src="" controls/></td>
														<td>Terminator 1</td>
														<td>20:20</td>
														<td className="small">Arnold Schwazeneger, Jean Claude Vandamme</td>
														<td>Action, Thriller</td>
														<td>Some example text..</td>
														<td>4.9</td>
														<td><button className="btn btn-success">Post</button>
															<button className="btn btn-danger">Delete</button>
														</td>
													</tr>
													<tr>
														<td>4</td>
														<td><video src="" controls/></td>
														<td>Terminator 2</td>
														<td>20:20</td>
														<td className="small">Arnold Schwazeneger, Jean Claude Vandamme</td>
														<td>Action, Thriller</td>
														<td>Some example text..</td>
														<td>4.9</td>
														<td><button className="btn btn-success">Post</button>
															<button className="btn btn-danger">Delete</button>
														</td>
													</tr>
													<tr>
														<td>5</td>
														<td><video src="" controls/></td>
														<td>Fast and Furious 5</td>
														<td>20:20</td>
														<td className="small">Vin diesel, Dwayne Johnson</td>
														<td>Action, Thriller</td>
														<td>Some example text..</td>
														<td>4.9</td>
														<td><button className="btn btn-success">Post</button>
															<button className="btn btn-danger">Delete</button>
														</td>
													</tr>
													<tr>
														<td>6</td>
														<td><video src="" controls/></td>
														<td>Fast and Furious 6</td>
														<td>20:20</td>
														<td className="small">Vin diesel, Dwayne Johnson</td>
														<td>Action, Thriller</td>
														<td>Some example text..</td>
														<td>4.9</td>
														<td><button className="btn btn-success">Post</button>
															<button className="btn btn-danger">Delete</button>
														</td>
													</tr>
													<tr>
														<td>7</td>
														<td><video src="" controls/></td>
														<td>Fast and Furious 7</td>
														<td>20:20</td>
														<td className="small">Vin diesel, Dwayne Johnson</td>
														<td>Action, Thriller</td>
														<td>Some example text..</td>
														<td>4.9</td>
														<td><button className="btn btn-success">Post</button>
															<button className="btn btn-danger">Delete</button>
														</td>
													</tr>*/}
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
export default (
	withFormik({
		mapPropsToValues: () => ({
			email: "",
			password: ""
		}),
		validationSchema: Yup.object().shape({
			actor: Yup.string().required("Actor is required"),
			title: Yup.string().required("Title is required"),
			duration: Yup.string().required("Duration is required"),
			genre: Yup.string().required("Genre is required"),
			media: Yup.string().required("Media is required")
			// descrip: Yup.string().required("Email is required"),
		})
	})(Media)
);