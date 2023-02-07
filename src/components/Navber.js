import React from 'react'
import {Link} from 'react-router-dom';

export default function Navber(props) {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid ">
                <Link className="navbar-brand px-3" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                  
                
                <div className="d-flex">
                <div className="collapse navbar-collapse px-5 justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item"><Link className= "nav-link px-4" to="/general"> General </Link></li>
                        <li className="nav-item"><Link className= "nav-link px-4" to="/business"> Business </Link></li>
                        <li className="nav-item"><Link className= "nav-link px-4" to="/entertainment"> Entertainment </Link></li>
                        <li className="nav-item"><Link className= "nav-link px-4" to="/health"> Health </Link></li>
                        <li className="nav-item"><Link className= "nav-link px-4" to="/science"> Science </Link></li>
                        <li className="nav-item"><Link className= "nav-link px-4" to="/technology"> Technology </Link></li>
                        <li className="nav-item"><Link className= "nav-link px-4" to="/sports"> Sports </Link></li>
                      
                        {/* <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li> */}
                    </ul>
              
                </div>
                </div>
            </div>
        </nav>
      </div>
    )

}
