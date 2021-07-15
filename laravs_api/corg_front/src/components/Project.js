import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from '@material-ui/core/Container';

export default function Project() {
    return (
        <div>
            <Router>
                <Container component="div" style={{ backgroundColor: '#cccccc', height: '70vh' }}>
                    <div className="p-4">
                        {/* <h6 className="text-bold">WORKS</h6>
                        <div className="container py-2">
                            <div className="row">
                                <div className="col-md-4 col-sm-6 col-12">
                                    <div className="card m-2 p-2 d-flex backColor cardRound">
                                        <Link className="mr-auto text-white small">Github</Link>
                                        <div className="card-body align-content-center justify-content-center">
                                            <h5 className="text-white">Phone OS</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 col-12">
                                    <div className="card m-2 p-2 backColor cardRound">
                                        <Link className="mr-auto text-white small">Github</Link>
                                        <div className="card-body d-flex">
                                            <h5 className="align-items-center justify-items-center text-white">Phone OS</h5>
                                        </div>                                        
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 col-12">
                                    <div className="card m-2 p-2 backColor cardRound">
                                        <Link className="mr-auto text-white small">Github</Link>
                                        <div className="card-body d-flex">
                                            <h5 className="align-items-center justify-items-center text-white">Phone OS</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </Container>
            </Router>
        </div>
    )
}
