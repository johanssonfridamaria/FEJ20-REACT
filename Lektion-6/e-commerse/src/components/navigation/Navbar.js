import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import ShoppingCart from '../shoppingCart/ShoppingCart';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../store/actions/userActions';

const Navbar = () => {

  const dispatch = useDispatch()

  let totalQuantity = useSelector(state => state.cartReducer.totalCartQuantity)
  let user = useSelector(state => state.userReducer.role)

  const logout = () => {
    dispatch(setUser())
  }

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

              {
                !user && (
                  <li className="nav-item">
                    <NavLink exact className="nav-link" to="/login">Login</NavLink>
                  </li>
                )
              }

              {
                user && (
                  <li className="nav-item">
                    <NavLink exact className="nav-link" to="/orders">Orders</NavLink>
                  </li>
                )
              }

              {
                user && (
                  <li className="nav-item">
                    <span className="nav-link pointer" onClick={logout}>Logout</span>
                  </li>
                )
              }


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

                  {
                    totalQuantity > 0
                    ? <span className="badge rounded-pill badge-notification bg-danger">{ totalQuantity }</span>
                    : ''
                  }
                  
                </span>
                {/* <!-- Dropdown menu --> */}
                <ul className="dropdown-menu dropdown-menu-end shopping-cart" aria-labelledby="navbarDropdown">
                  <ShoppingCart />
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
