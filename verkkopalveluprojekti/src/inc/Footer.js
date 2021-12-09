import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return(
            <footer className="footer">
                <div className="container-fluid d-flex justify-content-between">
                    <Link className="link" to="/aboutus"><h6 className="ms-auto col-lg-4 col-md-3 col-sm-12">Info</h6></Link>
                    <h6 className="ms-auto col-lg-4 col-md-3 col-sm-12">Verkkokauppa</h6>
                    <span className="ms-auto col-lg-4 col-md-3 col-sm-12">&copy; Konsta Jäske, Joonas Kelahaara, Joonas Kokko, Matias Hurtamo, Riku Honkamäki</span>
                </div>
                <div className="container-fluid d-flex justify-content-between">
                <Link className='link' to='/aboutus'>
                Maksutavat
                </Link>
                </div>
            </footer>
    )
}