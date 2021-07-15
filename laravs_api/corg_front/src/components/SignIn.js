import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import apiClient from '../services/api';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Copyright from './includes/Copyright';
import CircularProgress from '@material-ui/core/CircularProgress';
import Navbar from './includes/Navbar';
import './assets/css/styles.css';

const useStyles = makeStyles((theme) => ({
    avatar: {
        margin: 'auto',
        backgroundColor: theme.palette.secondary.main,
    },
}));

function SignIn(props) {
    const classes = useStyles();
    const history = useHistory();
    
    const [values, setValues] = useState({
		email: '',
		password: '',
	});
    const [error, setError ] = useState(false);
    const [filled, setFilled ] = useState(false);
	const [submitForm, setSubmitForm ] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isLogged, setIsLogged ] = useState(false);

	const [socialLoginUrl, setSocialLoginUrl ] = useState({
        google: null,
        facebook: null
    });

	const handleChange = (prop) => (e) => {
		setValues({ ...values, [prop]: e.target.value });
		if( values.email !== "" && values.password !== "" ){
            setFilled(true);		
        }
	};
    const togImage=()=>{
		setShowPassword(showPassword ? false : true )
	}
    const loginSubmit = (e) => {
		e.preventDefault();
		setSubmitForm({main: true});
		const data= {
			email: values.email,
			password: values.password,
		};

		apiClient.get('/sanctum/csrf-cookie')
			.then(res => {
				apiClient.post('/api/login', data)
					.then( 
						response => {
                            setSubmitForm(false);
                            localStorage.setItem('corg_token', response.data.token);
                            setIsLogged(true);
                            props.setUser(response.data.user)
                            history.push("/admin");
                    })
					.catch(
						error => {
                            console.log(error.response);
                            if (error.response.status === 500) {
                                setError({message: "Connection Error"});    
                            } else {
                                setError(error.response.data);    
                            }
							setSubmitForm(false);
					})
			})
            .catch(err => {
                setSubmitForm(false);
                console.log(err.response);
                if (err.response.status === 500 ) {
                    setError({message: "Connection Error or Server Error"});    
                } else {
                    setError({message: "Connection Error or Server Error"});    
                }
                // if(err.response === "undefined"){
                    // setError({message: "Error In Connection"});
                // } else if(err.response.status === 500){
                
                    // setError({message: "Error In Connection"});
                // }
            });
	}
    const loginButton =(prop)=> (e)=>{
        if(prop === 'google'){
            apiClient.get('/api/auth/google/url')
                .then(response => {
                    setSocialLoginUrl({google: response.data.url})
                    
                })
                .catch(error => console.log(error.response));
        } else {
            apiClient.get('/api/auth/facebook/url')
                .then(response => {
                    setSocialLoginUrl({facebook: response.data.url})
                })
                .catch(error => console.log(error.response));
        }
        
    }
    // useEffect(()=>{
    //     if(isLogged)
    //         history.push("/");
    // })
    
    return (
        <React.Fragment>
            {/* <Navbar /> */}
            <Navbar userDetails={props.userDetails} setUser={props.setUser}/>
            <div className="container-fluid">
                <div className="row">
                
                    <div className="col-xs-12 col-sm-8 col-md-5 col-lg-5 col-xl-4 mx-auto">
                        {/* {error ? <div className="alert alert-danger my-1 text-center">{error.message ? error.message : "Bad Connection"}</div> : ""} */}
                        {error ? <div className="alert alert-danger my-1 text-center">{error.message}</div> : ""}
                        <div className="card border-0 shadow mt-2 mx-auto loginCard">
                            <div className="card-body">
                            
                                <Avatar className={classes.avatar}>
                                    <LockOutlinedIcon />
                                </Avatar>
                                <Typography component="h1" variant="h5" className="text-white">
                                    Sign in
                                </Typography>
                                <p className="small text-center text-white">It's extremely easy and quick</p>
                                <form onSubmit={loginSubmit}>
                                    <div className="form-floating mb-3">
                                        <input type="email" id="myEmail" name="email" className="form-control"
                                            onChange={handleChange('email')} required aria-describedby="myEmailError" placeholder=" " />
                                        <label htmlFor="myEmail">Email address</label>
                                      
                                    </div>
                                    <div className="form-floating my-3">
                                        <input type={showPassword ? "text" : "password"} name="password" className="form-control" 
                                            onChange={handleChange('password')} required aria-describedby="myPassError" placeholder=" " />
                                        <label htmlFor="myPass">Password</label>
                                        <span onClick={togImage} className="btn showPassBtn">
                                            <img src={showPassword ? require('./assets/images/icons/eyeclose.png') : require('./assets/images/icons/eye.png')} alt='sign password' id='imgmi' width='25px'/>
                                        </span>
                                        {/* {error.password ? <div id="myPassError" className="invalid-feedback">{error.password}</div> : ""} */}
                                         
                                    </div>
                                    <div className="clearfix my-3">  
                                        <div className="form-group form-check float-start">
                                            <label className="form-check-label">
                                                <input className="form-check-input me-1" type="checkbox" name="check"/>
                                                <small className="text-white"> Remember me</small>
                                            </label>
                                        </div>
                                        <div className="form-group float-end">
                                            <Link href="/forgot" variant="body2" className="text-white">
                                                Forgot password?
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="d-grid gap-2">
                                        <button type="submit" disabled={filled ? false : true} className="btn btn-light btn-sm mx-1">
										{submitForm.main ? <CircularProgress size={18} thickness={4} color="inherit" className="ms-2 " /> : 'Login' }</button>
                                        <Grid container>
                                            <Link href="/register" variant="body2" className="mx-auto text-white">
                                                {"Don't have an account? Sign Up"}
                                            </Link>
                                        </Grid>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-6 mx-auto">
                                            <button type="button" onClick={loginButton('google')} name="btn" value="google" className="form-control btn btn-sm btn-light">
                                                <Link href={socialLoginUrl.google} className="butn"><small>
                                                    {submitForm.google ? <CircularProgress size={18} thickness={4} color="inherit" className="ms-2 " /> : 'SignIn with Gmail' }
                                                </small></Link>
                                            </button>
                                        </div>
                                        <div className="col-6 mx-auto">
                                            <button type="button" onClick={loginButton('facebook')} name="btn" value="facebook" className="form-control btn btn-sm btn-light">
                                                <Link href={socialLoginUrl.facebook} className="butn"><small>
                                                    {submitForm.facebook ? <CircularProgress size={18} thickness={4} color="inherit" className="ms-2 " /> : 'SignIn with Facebook' }
                                                </small></Link>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                       
                    </div>
                </div>
                <Box mt={8}>
                    <Copyright/>
                </Box>
            </div>
        </React.Fragment>
    );
}

export default SignIn;