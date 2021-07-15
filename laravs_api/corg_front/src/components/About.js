import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from '@material-ui/core/Container';

export default function Contact() {
    const [allStudents, setAllStudents] = useState(null);

    const getAllStudents=(e)=>{
        e.preventDefault();
        axios.get('http://localhost:8000/api/students').then(
			response => {
				console.log(response.data);
				setAllStudents(response.data);
			}
		).catch(
			error => {
				console.log(error);
			}
		)
        // axios({
        //     method: 'get',
        //     url: 'http://localhost:8000/api/students',
        //     }).then(
        //     response => {
        //         console.log(response);
        //         setAllStudents(response);
        //     }
        // ).catch(
        //     error => {
        //         console.log(error);
        //     }
        // );
    }
    return (
        <div>
            <Router>
                <Container component="div" style={{ height: '70vh' }}>
                    <div className="p-4">
                        <div className="py-3">
                            <div className="row">
                                <div className="col-xs-12 col-sm-8 col-6 mx-auto">
                                    <button className="btn btn-primary" onClick={getAllStudents} >Fetch Students</button>
                                    <div>{allStudents ? allStudents.map(students =>
                                        <li>{students.firstName}</li>
                                    ): ""}</div>
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
