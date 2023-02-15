import React,{useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom';

export default function Navber(props) {
    const location = useLocation();

    useEffect(()=>{
        let afterTitle = capitalizedFirstLetter(location.pathname);
        document.title = `Tazakharbar | Top ${afterTitle}`;
    }, [location.pathname])

    const capitalizedFirstLetter =(str)=> {
        let tName = str.slice(1);
        return tName.charAt(0).toUpperCase() + tName.slice(1);
    }

    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid ">
                <Link className="navbar-brand px-3" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item"><Link className= {`nav-link px-3 ${location.pathname === '/'?'active':""}`} to="/general"> General </Link></li>
                        <li className="nav-item"><Link className= {`nav-link px-3 ${location.pathname === '/business'?'active':""}`} to="/business"> Business </Link></li>
                        <li className="nav-item"><Link className= {`nav-link px-3 ${location.pathname === '/entertainment'?'active':""}`} to="/entertainment"> Entertainment </Link></li>
                        <li className="nav-item"><Link className= {`nav-link px-3 ${location.pathname === '/health'?'active':""}`} to="/health"> Health </Link></li>
                        <li className="nav-item"><Link className= {`nav-link px-3 ${location.pathname === '/science'?'active':""}`} to="/science"> Science </Link></li>
                        <li className="nav-item"><Link className= {`nav-link px-3 ${location.pathname === '/technology'?'active':""}`} to="/technology"> Technology </Link></li>
                        <li className="nav-item"><Link className= {`nav-link px-3 ${location.pathname === '/sports'?'active':""}`} to="/sports"> Sports </Link></li>
                      
                    </ul>
              
                </div>
            </div>
        </nav>
      </div>
    )

}
