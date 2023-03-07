import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div><nav className="navbar navbar-expand-lg navbar-dark bg-success">
    <Link className="navbar-brand fs-1 fst-italic" to="/">Crunchy-Munchy</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
       
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>6
  </nav></div>
  )
}

export default Navbar