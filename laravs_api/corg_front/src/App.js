import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import apiClient from './services/api';
// import { Provider } from 'react-redux';
// import store from './store/store';
// import Navbar from './components/includes/Navbar';
// import MainPage from './components/MainPage';
import AdminDashboard from './components/admins/AdminDashboard';
import Home from './components/Homepage';
import Contact from './components/Contact';
import About from './components/About';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Forgot from './components/Forgot';
import ResetPassword from './components/ResetPassword';
import LoginGoogle from './components/SocialLogin';
import NotFound from './components/NotFound';

function App() {
  const [ userDetails, setUserDetails ] = useState(null);
  const config = {
      headers: {
          Authorization: 'Bearer ' + localStorage.getItem('corg_token')
      }
  };
  useEffect(()=>{
    apiClient.get('/sanctum/csrf-cookie')
      .then( response => {
          apiClient.get('/api/dashboard', config)
            .then(
              res => {
                setUser(res.data.owner);
                // setUserDetails(res.data.owner)
              },
              err => {
                console.log(err)
            }) 
      })  

  },[apiClient])

  const setUser=(user)=>{
      setUserDetails(user)
  }
  
  return (
    // <Provider store={store} >
      <div className="App">
        <BrowserRouter>
            {/* <Navbar userDetails={userDetails} setUser={setUser}/>   */}
            {/* <Navbar userDetails={userDetails} setUserDetails={userDetails}/>   */}
            <Switch>
              <Route exact path="/" component = {() => <Home userDetails={userDetails} /> } />
              {/* <Route exact path="/" component = {() => <MainPage setUser={setUser} userDetails={userDetails} /> } /> */}
              <Route exact path="/admin" component = {() => <AdminDashboard userDetails={userDetails} /> } />
              <Route path="/contact" component = { Contact } />
              <Route path="/about" component = { About } />
              <Route path="/login" component = {() => <SignIn setUser={setUser} /> } />
              <Route path="/register" component = { SignUp } />
              <Route path="/forgot" component = { Forgot } />
              <Route path="/reset-password" component = { ResetPassword } />
              <Route exact path="/auth/google" component={LoginGoogle} />
              <Route path="*" component = { NotFound } />
            </Switch>
        </BrowserRouter>
    </div>
    // </Provider>
  );
}

export default App;
