import React, { useState } from 'react';
import apiClient from '../services/api';
// import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import CircularProgress from '@material-ui/core/CircularProgress';
import OpenDialog from './includes/OpenDialog';
import { Link, useHistory } from 'react-router-dom';
import Navbar from './includes/Navbar';
import './assets/css/index.css';

const useStyles = makeStyles((theme) => ({
	root: {
		flexWrap: 'wrap',
		'& > *': {
			margin: theme.spacing(1),
			width: '25ch',
			
		},
	},	
	margin: {
		margin: theme.spacing(1),
	},
	withoutLabel: {
		marginTop: theme.spacing(3),
	},
	textField: {
		width: '25ch',
	},
	paper: {
		marginTop: theme.spacing(2),
		paddingTop: theme.spacing(2),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	}
}));

function SignUp (props) {
	const classes = useStyles();

	const [values, setValues] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		password_confirm: '',
		showPassword: false,
	});
	const [error, setError ] = useState(false);
	const [filled, setFilled ] = useState(false);
	const [submitForm, setSubmitForm ] = useState(false);
	const [socialLoginUrl, setSocialLoginUrl ] = useState(null);
	const history = useHistory();

	const handleChange = (prop) => (e) => {
		if(prop === 'firstName'){
			(e.target.value.length >= 3 && e.target.value !== "")  ? setError({firstName: false}) : setError({firstName: true});
		} else if(prop === 'lastName'){
			(e.target.value.length >= 3 && e.target.value !== "") ? setError({lastName: false}) : setError({lastName: true});
		}else if(prop === 'password'){
			(e.target.value.length >= 5 && e.target.value !== "") ? setError({password: false}) : setError({pass: true});
		} else if(prop === 'password_confirm'){			
			(values.password !== e.target.value && e.target.value !== "") ? setError({password_confirm: true}) : setError({password_confirm: false});	
		}
		setValues({ ...values, [prop]: e.target.value });
		if(values.firstName !== "" && values.lastName !== "" && values.email !== ""
			&& values.password !== "" && values.password_confirm !== ""){
				setFilled(true);		
			}
	};

	const handleShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	};

	const handlePassword = (event) => {
		event.preventDefault();
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitForm({ main:true });
		const data = {
			firstName: values.firstName,
			lastName: values.lastName,
			email: values.email,
			password: values.password,
			password_confirmation: values.password_confirm,
		};
		apiClient.get('/sanctum/csrf-cookie')
			.then(res => {
				apiClient.post('/api/register', data)
					.then( 
						response => {
							history.push("/login");
							setSubmitForm(false);
					})
					.catch(
						error => {
							setError(error.response.data.errors);
							setSubmitForm(false);
					})
					
			});
	}
	
	return (
		<React.Fragment>
			{/* < Navbar /> */}
			<Navbar userDetails={props.userDetails} setUser={props.setUser}/>
			<div className="container-fluid">
				<div className="row">
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-4 col-xs-12 mx-auto">
                        
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-8 col-xs-12 mx-auto">
						<Container component="main" maxWidth="xs" className="shadow-lg pb-2" style={{backgroundColor: '#b1b2cd', margin:'auto', borderRadius:'15px'}}>
                            <div className={classes.paper}>
                                <Typography component="h1" variant="h5">
                                    Sign Up
                                </Typography>
								<p className="small text-center">It's extremely easy and quick</p>
								<span className="small text-success text-center"></span>
								<form onSubmit={handleSubmit}>
									<div className="me-1">
										<div className="row px-1">
											<div className="col-6">
												<FormControl fullWidth className={classes.margin} variant="filled" >
													<TextField type="text" error= {error.firstName ? true : false } id="filled-basic" 
														name="firstName" onChange={handleChange('firstName')} label="First Name"
														variant="filled" helperText={error.firstName ? "Firstname is Invalid" : ""} required 
													/>
												</FormControl>
											</div>
											<div className="col-6">
												<FormControl fullWidth className={classes.margin} variant="filled" >
													<TextField type="text" error={error.lastName ? true : false } id="filled-basic" 
														name="lastName" onChange={handleChange('lastName')} label="Last Name"
														variant="filled" helperText={error.lastName ? "Invalid Lastname" : ""} required 
													/>
												</FormControl>
											</div>
										</div>

										<FormControl fullWidth className={classes.margin} variant="filled" >
											<TextField type="email" error= {error.email ? true : false} id="filled-basic"
												name="email" onChange={handleChange('email')} label="Email Address"
												variant="filled" helperText={error.email ? error.email : "" } required 
											/>
										</FormControl>

										<FormControl fullWidth className={classes.margin} variant="filled" >
											<InputLabel error= {error.password ? true : false} htmlFor="myPassword">Password</InputLabel>
											<FilledInput
												id="myPassword"
												type={values.showPassword ? 'text' : 'password'}
												name="password"
												error= {error.password ? true : false}
												onChange={handleChange('password')}
												required
												endAdornment={
													<InputAdornment position="end">
														<IconButton
															aria-label="toggle password visibility"
															onClick={handleShowPassword}
															onMouseDown={handlePassword}
															edge="end"
														>
															{values.showPassword ? <Visibility /> : <VisibilityOff />}
														</IconButton>
													</InputAdornment>
												}
											/>
											{error.password ? <FormHelperText error id="filled-helper-text">{error.password}</FormHelperText> : ""}
										</FormControl>
	
										<FormControl fullWidth className={classes.margin} variant="filled" >
											<InputLabel error= {error.password_confirm ? true : false} htmlFor="confirmPassword">Confirm Password</InputLabel>
											<FilledInput
												id="confirmPassword"
												type={values.showPassword ? 'text' : 'password'}
												name="password_confirm"
												error= {error.password_confirm ? true : false}
												onChange={handleChange('password_confirm')}
												required
												endAdornment={
												<InputAdornment position="end">
													<IconButton
														aria-label="toggle password visibility"
														onClick={handleShowPassword}
														onMouseDown={handlePassword}
														edge="end"
													>
														{values.showPassword ? <Visibility /> : <VisibilityOff />}
													</IconButton>
												</InputAdornment>
												}
											/>
											{error.password_confirm ? <FormHelperText error id="filled-helper-text">Password does not match</FormHelperText> : ""}
										</FormControl>
									</div>
									
									<small className="mb-2 mx-2 text-dark"><small>By clicking Register, You agree to our terms and Policy. You may receive notifications and opt out any time.</small></small>
									<button type="submit" disabled={filled ? false : true} className="btn signUpBtn btn-sm form-control mx-1 text-white">
										{submitForm.main ? <CircularProgress size={18} thickness={4} className="ms-2 text-white" /> : 'SignUp' }
									</button>
									
									<div className="clearfix">
										<p className="float-end small"><small>Are you a registered user? <Link to="/login">Login here</Link></small></p>
									</div>
								</form>
								<Link to={socialLoginUrl} className="col-12 btn btn-danger btn-sm text-white mx-1">
									<small>{submitForm.social ? <CircularProgress size={18} thickness={4} color="secondary" className="ms-2 text-dark"/> : 'SignUp Using Gmail' }</small></Link>
									
							</div>
						</Container>			
					</div>	
				</div>
			</div>
        </React.Fragment>
    );
}
export default SignUp;
