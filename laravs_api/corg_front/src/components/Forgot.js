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

function Forgot(props) {
    const classes = useStyles();
    const history = useHistory();
    
    const [email, setEmail] = useState(null);
    const [error, setError ] = useState(false);
    const [filled, setFilled ] = useState(false);
	const [submitForm, setSubmitForm ] = useState(false);
    
    const handleChange =(e) => {
        e.preventDefault();
        // console.log(e.target);
		setEmail(e.target.value);
		if( email !== ""){
            setFilled(true);		
        }
	};

    const forgotSubmit = (e) => {
		e.preventDefault();
		setSubmitForm(true);
		const data = {email: email};
        // console.log(email);
		apiClient.get('/sanctum/csrf-cookie')
			.then(res => {
				apiClient.post('/api/forgot', data)
					.then( response => {
                        let mail = response.data.email;
                        let token = response.data.token;
                        // apiClient.get(`/api/forgot/${mail}`)
                        //     .then( myres => {
                                console.log(response.data);
                                setSubmitForm(false);
                                // console.log(myres);
                                // setError(response.data);
                                history.push(`/reset-password/${mail}+`);
                            })
                            .catch(myerr =>{
                                setSubmitForm(false);
                                console.log(myerr, "Can't get the mail");
                            })

                    // })
					// .catch(
					// 	error => {
                    //         console.log(error.response, "Can't get response from the backend");
					// 		setError(error.response.data);
					// 		setSubmitForm(false);
					// })
			})
            .catch(err => {
                // console.log(err.response);
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
                    <div className="col-xs-12 col-sm-8 col-md-5 col-lg-5 col-xl-4 mx-auto">
                        {error ? <div className="alert alert-danger my-2 text-center">{error.message}</div> : ""}
                        <div className="card border-0 shadow mx-auto mt-4" style={{backgroundColor: '#d6e6f5'}}>
                            <div className="card-body">
                            
                                <Typography component="h1" variant="h6">Forgot Password</Typography>
                                <form onSubmit={forgotSubmit} className="mt-4">
                                    <div className="form-floating mb-3">
                                        <input type="email" id="myEmail" name="email" className="form-control"
                                            onChange={handleChange} required aria-describedby="myEmailError" placeholder=" " />
                                        <label htmlFor="myEmail">Email address</label>
                                        
                                    </div>
                                    
                                    <div className="d-grid gap-2">
                                        <button type="submit" disabled={filled ? false : true} className="btn btn-primary btn-sm mx-1">
										{submitForm ? <CircularProgress size={18} thickness={4} color="inherit" className="ms-2 text-white" /> : 'Confirm Email' }</button>
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

export default Forgot;