import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function Register() {
	const [values, setValues] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
	});
	const [error, setError ] = useState({
		firstName: false,
		lastName: false,
		pass: false
	});
	// const [showPassword, setShowPassword] = useState(false);
	// const [data, setData ] = useState(null);

	// const handleInputChange = (e) => {
	// 	setState({
	// 		...form,
	// 		[e.target.name]: e.target.value
	// 	});
	// 	console.log(form);
	// };
	const handleChange = (prop) => (e) => {
		if(prop === 'firstName'){
			e.target.value.length >= 3 ? setError({firstName: false}) : setError({firstName: true});
		} else if(prop === 'lastName'){
			e.target.value.length >= 3 ? setError({lastName: false}) : setError({lastName: true});
		}else if(prop === 'password'){
			e.target.value.length >= 5 ? setError({pass: false}) : setError({pass: true});
		}
		setValues({ ...values, [prop]: e.target.value });
		// (values.email.length >= 1 && values.password.length >= 1 && error.pass === false && error.cpass === false) 
		// 	? setError({showButton: true}) : setError({showButton: false}); 
		console.log(values);
	};

	const handleSubmit = async(e) => {
		e.preventDefault();
		const data = {
			firstName: values.firstName,
			lastName: values.lastName,
			email: values.email,
			password: values.password,
		};
		console.log(data);
		let reqOptions = {
			method: 'POST',
			headers: new Headers({
				'Content-Type': 'application/json',
			}),
			body: JSON.stringify(data)
		};
		try {
			const response = await fetch('http://localhost:8000/api/register', reqOptions)
        	const json = await response.json()
			if(response.status !== 401 && response.status !== 500){
				console.log("Success", json);
                // history.push("/login");
			} else {
				console.log("Some error", json);
			}
		} catch (error){
			console.log('Authentication error: ', error)
		}
		
		// axios.post('http://localhost:8000/api/register', data)
		// 	.then(res => {
		// 		console.log(res);
		// });
		// axios.post('http://localhost:8000/api/register/', data)
		// 	.then(res => console.log(res.data));
		// axios.post('http://localhost:8000/api/register', data).then(
		// 	response => {
		// 		console.log(response.data);
		// 	}
		// ).catch(
		// 	error => {
		// 		console.log(error);
		// 	}
		// )

	}
	return (
		<React.Fragment>
			<div className="container mt-3">
				<div className="row">
					<div className="col-md-6 mx-auto">
						<div className="card shadow-lg">
							<div className="card-body">
								<h4 className="text-lead text-center text-primary">Register Here</h4>
								<em className="small text-center">Welcome to this platform, Fill this form to register</em>
								<form className="form m-2" onSubmit={handleSubmit}>
									<div className="row">
										<div className="form-group mb-3 col-md-6">
											<input type="text" name="firstName" className="form-control" onChange={handleChange('firstName')} placeholder="Firstname"/>
										</div>
										<div className="form-group mb-3 col-md-6">
											<input type="text" name="lastName" className="form-control" onChange={handleChange('lastName')} placeholder="Lastname"/>
										</div>
										<div className="form-group mb-3 col-12">
											<input type="email" name="email" className="form-control" onChange={handleChange('email')} placeholder="Email"/>
										</div>
										<div className="form-group col-12">
											<input type="password" name="password" className="form-control" onChange={handleChange('password')} placeholder="Password"/>
										</div>
									</div>
									<div className="form-group text-center">
										<button type="submit" className="btn btn-block btn-success">Register</button>
										<p><em>Are you a registered member? </em><Link to="/login"> Login Here </Link></p>
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
export default Register;