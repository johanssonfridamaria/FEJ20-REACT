import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    // <!-- Navbar -->
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        {/* <!-- Container wrapper --> */}
        <div className="container-fluid">
          {/* <!-- Navbar brand --> */}
          <Link className="navbar-brand" to="/">LOGO</Link>

          {/* <!-- Toggle button --> */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          {/* <!-- Collapsible wrapper --> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <!-- Right links --> */}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink exact className="nav-link" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact className="nav-link" to="/products">Products</NavLink>
              </li>
              {/* <!-- Navbar dropdown --> */}
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle hidden-arrow"
                  id="navbarDropdown"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-shopping-cart"></i>
                  <span className="badge rounded-pill badge-notification bg-danger">1</span>
                </span>
                {/* <!-- Dropdown menu --> */}
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                  SHOPPINGCART
                </ul>
              </li>
            
            </ul>
            {/* <!-- Left links --> */}

          </div>
          {/* <!-- Collapsible wrapper --> */}
        </div>
        {/* <!-- Container wrapper --> */}
      </nav>
  )
}

export default Navbar
