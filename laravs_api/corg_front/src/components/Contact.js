import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from '@material-ui/core/Container';

export default function Contact() {
    return (
        <div>
            <Router>
                <Container component="div" style={{ height: '70vh' }}>
                    <div className="p-4">
                        <div className="py-3">
                            <div className="row">
                                <div className="col-xs-12 col-sm-8 col-6 mx-auto">
                                    <h6 className="text-bold">CONTACT US </h6>
                                    <p className="text-lighter small">You're welcome here, and we are delighted to here from you, 
                                        whether a first-timer, new-convert or a long-time member, We will love to know to help you!</p>
                                    <div className="card m-1 border-none">
                                        <div className="card-body">
                                            <p className="text-danger small"><small>**All fields are required!**</small></p>

                                            <form>
                                                <div className="form-group mb-3">
                                                    <input type="text" name="fullName" className="form-control" placeholder="Full Name" />
                                                </div>
                                                <div className="form-group mb-3">
                                                    <input type="email" name="email" className="form-control" placeholder="Email" />
                                                </div>
                                                <div className="form-group mb-3">
                                                    <textarea name="message" className="form-control" placeholder="Your Message" ></textarea>
                                                </div>
                                                <div className="d-flex">
                                                    <button className="ms-auto btn btn-info btn-small"><small>Send Message</small></button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-4 col-6 ">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Router>
        </div>
    )
}
