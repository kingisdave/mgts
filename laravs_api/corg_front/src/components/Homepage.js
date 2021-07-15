import React from 'react';
import Navbar from './includes/Navbar';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
// import LazyLoader from './includes/LazyLoader';
// import apiClient from '../services/api';

function Homepage(props) {
    
    return (
        <div>
            {/* <Navbar /> */}
            <Navbar userDetails={props.userDetails} setUser={props.setUser}/>
            {/* {props.userDetails ?  */}
                <div className="container-fluid displayPage backColor">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-xl-6 text-justify py-3 firstDisplay">
                            <h1 className="text-bold py-3">Management made simple, Banking made for you</h1>
                            <p className="py-4 px-2 text-center smallText"><small>we offer the management access you expected with top-ranked online and mobile banking</small></p>   
                            <div className="d-flex justify-content-center">
                                <button className="startBtn"><small>Get Started</small></button>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-6 mx-auto frontImg">
                            <div className="frontImg"></div>
                        </div>

                    </div>
                    <div className="row secBackground clearfix">
                        <div className="secondBg">
                            <div className="secLeft newSecondBg btnColor"></div>
                            <div className="secRight newSecondBg btnColor"></div>
                        </div>
                        <div className="anotherSecBg">
                            <div className="container deskContainer">
                                <div className="mycards">
                                    <div className="card m-1 shadow-lg insideCard">
                                        <div className="flip-card-inner">
                                            <div className="flip-card-front">
                                                <img src="img_avatar.png" alt="Avatar" style={{width:'300px', height:'300px'}} />
                                            </div>
                                            <div className="flip-card-back">
                                                <h1>John Doe</h1>
                                                <p>Architect & Engineer</p>
                                                <p>We love that guy</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mycards">
                                    <div className="card m-1 shadow-lg insideCard">
                                        <div className="flip-card-inner">
                                            <div className="flip-card-front">
                                                <img src="img_avatar.png" alt="Avatar" style={{width:'300px', height:'300px'}} />
                                            </div>
                                            <div className="flip-card-back">
                                                <h1>John Doe</h1>
                                                <p>Architect & Engineer</p>
                                                <p>We love that guy</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mycards">
                                    <div className="card m-1 shadow-lg insideCard">
                                        <div className="flip-card-inner">
                                            <div className="flip-card-front">
                                                <img src="img_avatar.png" alt="Avatar" style={{width:'300px', height:'300px'}} />
                                            </div>
                                            <div className="flip-card-back">
                                                <h1>John Doe</h1>
                                                <p>Architect & Engineer</p>
                                                <p>We love that guy</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile interface carousel */}
                            {/* <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="..." className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                    <img src="..." className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                    <img src="..." className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                                </div> */}

                        </div>
                    </div>
                    <div className="row thirdBackground justify-content-center">
                        {/* <div className="thirdBg">
                            <div className="thirdLeft newThirdBg"></div>
                            <div className="thirdRight newThirdBg btnColor"></div>
                        </div> */}
                        <div className="container">
                            <div className="smallcards">
                                <div className="insideCard">
                                    <AddCircleIcon className="text-white" fontSize="large"/>
                                </div>
                            </div>
                            <div className="smallcards">
                                <div className="insideCard">
                                    <SettingsIcon className="text-white" fontSize="large"/>
                                </div>
                            </div>
                            <div className="smallcards">
                                <div className="insideCard">
                                    <SupervisorAccountIcon className="text-white" fontSize="large"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row fourthBackground">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 justify-content-center">
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            {/* : <LazyLoader />} */}
        </div>
    )
}

export default Homepage
