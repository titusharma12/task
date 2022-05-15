import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#" style={{ fontWeight: 800 , margin:'0px 0px 0px 25px'}}>Edvora</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <form className="d-flex">
                        <h5 className="me-2" style={{color: 'white', width: '130px' , margin:'15px 0px 0px 0px'}}>Dhruv Singh</h5>
                        <img style={{borderRadius: '50%', width:'40px', height:'40px' , margin:"8px 25px 0px 0px"}} src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg" alt="Error" />
                    </form>
                </nav>
            </div>
        )
    }
}

export default Navbar
