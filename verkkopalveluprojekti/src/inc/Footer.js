import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return(
            <footer className="footer">
                <div className="container-fluid d-flex justify-content-between">
                    <Link className="link" to="/aboutus"><h6 className="ms-auto col-lg-4 col-md-3 col-sm-12">Info</h6></Link>
                    <h6>&copy; Voima</h6>
                </div>
                <div className="container-fluid d-flex justify-content-between">
                <Link className='link' to='/aboutus'>
                Maksutavat
                </Link>
                </div>
            </footer>
    )
}