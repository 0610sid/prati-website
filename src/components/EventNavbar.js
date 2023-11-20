import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <>
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/" s>Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">About</a>
          </li>
         
        </ul>
        <form className="d-flex" role="search">
        <div className="form-check form-switch">
  <input className="form-check-input my-3" onClick={props.toggleMode} type="checkbox" role="switch" id="switch"/><p className='my-2 mx-1' style={{color:props.mode==='light'?'black':'white'}}>{props.mode}</p>
</div>
          <input className="form-control mt-2 mb-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success mt-2 mb-2" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
    </div>
    </>
  )
  }

Navbar.propTypes={
    title:PropTypes.string.isRequired
}
Navbar.defaultProps={
    title:"Text"
};
