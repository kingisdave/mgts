import React, { useState} from 'react';
import { useHistory } from 'react-router-dom';
import apiClient from '../services/api';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Copyright from './includes/Copyright';
import CircularProgress from '@material-ui/core/CircularProgress';
import './assets/css/styles.css';

const useStyles = makeStyles((theme) => ({
    avatar: {
        margin: 'auto',
        backgroundColor: theme.palette.secondary.main,
    },
}));

function ResetPassword() {
    const classes = useStyles();
    const history = useHistory();
    
    const [values, setValues] = useState({
        password: '',
		password_confirm: '',
	});
    const [error, setError ] = useState(false);
    const [showPassword, setShowPassword ] = useState(false);
    const [filled, setFilled ] = useState(false);
	const [submitForm, setSubmitForm ] = useState(false);
    
    const handleChange = (prop) => (e) => {
		// if(prop === 'password'){
		// 	(e.target.value.length >= 5 && e.target.value !== "") ? setError({password: false}) : setError({password: true});
		// } else if(prop === 'password_confirm'){			
		// 	(values.password !== e.target.value && e.target.value !== "") ? setError({password_confirm: true}) : setError({password_confirm: false});	
		// }
		setValues({ ...values, [prop]: e.target.value });
		if(values.password !== "" && values.password_confirm !== ""){
			setFilled(true);		
		}
	};
    const togPassword=()=>{
		setShowPassword(showPassword ? false : true); 
	}
    const resetSubmit = (e) => {
		e.preventDefault();
		setSubmitForm(true);
		const data = {
            password: values.password,
            password_confirmation: values.password_confirm,
        };
		apiClient.get('/sanctum/csrf-cookie')
			.then(res => {
                console.log(res);
				apiClient.post('/api/resetpassword', data)
					.then( 
						response => {
                            console.log(response);
							setSubmitForm(false);
                            // setError({success: response.data});
                            // history.push("/login");
                    })
					.catch(
						error => {
                            console.log(error.response);
                            // setError(error.response.data);
							setSubmitForm(false);
					})
			})
            .catch(err => {
                setSubmitForm(false);
                if(err.response === "undefined"){
                    setError({message: "Error In Connection"});
                }
                setError({message: "Error In Connection"});
            });
	}
    
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-sm-8 col-md-6 col-lg-6 col-xl-5 mx-auto">
                        {error.success ? <div className="alert alert-success my-2 text-center">{error.success}</div> : ""}
                        {error.message ? <div className="alert alert-danger my-2 text-center">{error.message}</div> : ""}
                        <div className="card border-0 shadow mx-auto mt-4" style={{backgroundColor: '#d6e6f5'}}>
                            <div className="card-body">
                            
                                <Typography component="h1" variant="h6">Reset your Password</Typography>
                                <form onSubmit={resetSubmit} className="mt-5">
                                    <div className="form-floating my-3">
                                        <input type={showPassword ? 'text' : 'password'} name="password" className="form-control" 
                                            onChange={handleChange('password')} required aria-describedby="myPassError" placeholder=" " />
                                        <label htmlFor="myPass">Password</label>
                                        {error.password ? <div id="myPasswardError" className="invalid-feedback">{error.password}</div> : ""}
                                      
                                    </div>
                                    <div className="form-floating my-3">
                                        <input type={showPassword ? 'text' : 'password'} name="password_confirm" className="form-control" 
                                            onChange={handleChange('password_confirm')} required aria-describedby="myPassError" placeholder=" " />
                                        <label htmlFor="myPassConfirm">Confirm Password</label> 
                                    </div>
                                    <div className="clearfix my-2">  
                                        <div className="form-group form-check float-start">
                                            <label className="form-check-label">
                                                <input className="form-check-input me-2" type="checkbox" onChange={togPassword} />
                                                <small>{showPassword ? "Hide Password" : "Show Password"}</small>
                                         </label>
                                        </div>
                                    </div>
                                    <div className="d-grid gap-2">
                                        <button type="submit" disabled={filled ? false : true} className="btn btn-primary btn-sm mx-1">
										{submitForm ? <CircularProgress size={18} thickness={4} color="inherit" className="ms-2 text-white" /> : 'Reset Password' }</button>
                                        <Grid container>
                                            <Link href="/register" variant="body2" className="mx-auto">
                                                {"Don't have an account? Sign Up"}
                                            </Link>
                                        </Grid>
                                    </div>
                                </form>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <Box mt={4} className="fixed-bottom">
                    <Copyright />
                </Box>
            </div>
        </React.Fragment>
    );
}

export default ResetPassword;