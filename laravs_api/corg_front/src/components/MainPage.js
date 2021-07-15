import React, { useState, useEffect } from 'react';
import '../App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import axios from 'axios';
import apiClient from '../services/api';
// import { Provider } from 'react-redux';
// import store from './store/store';
import Navbar from './includes/Navbar';
// import AdminDashboard from './admins/AdminDashboard';
import Home from './Homepage';
import Contact from './Contact';
import About from './About';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Forgot from './Forgot';
import ResetPassword from './ResetPassword';
import LoginGoogle from './SocialLogin';
import NotFound from './NotFound';

function MainPage(props) {
  const [ userDetails, setUserDetails ] = useState(null);
  // const config = {
  //     headers: {
  //         Authorization: 'Bearer ' + localStorage.getItem('corg_token')
  //     }
  // };
  // useEffect(()=>{
  //   apiClient.get('/sanctum/csrf-cookie')
  //     .then( response => {
  //         apiClient.get('/api/dashboard', config)
  //           .then(
  //             res => {
                // setUser(res.data.owner);
  //               // setUserDetails(res.data.owner)
  //             },
  //             err => {
  //               console.log(err)
  //           }) 
  //     })  

  // },[apiClient])

  const setUser=(user)=>{
      props.setUser(user)
  }
  
  return (
      <div className="MainPage">
        <BrowserRouter>
            <Navbar userDetails={props.userDetails} setUser={props.setUser}/>  
            <Switch>

              {/* <Route exact path={`/admin`} component = {() => <Home userDetails={userDetails} /> } /> */}
              {/* <Route path="/admin" component = { AdminDashboard } /> */}
              {/* <Route path={`/contact`} component = { Contact } /> */}
              {/* <Route path={`/about`} component = { About } /> */}
              {/* <Route path={`/login`} component = {() => <SignIn setUser={setUser} /> } /> */}
              {/* <Route exact path={`/register`} component = { SignUp } /> */}
              {/* <Route path={`/forgot`} component = { Forgot } /> */}
              {/* <Route path={`/reset-password`} component = { ResetPassword } /> */}
              {/* <Route path={`/auth/google`} component={ LoginGoogle } /> */}
              {/* <Route path="*" component = { NotFound } /> */}
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default MainPage;
