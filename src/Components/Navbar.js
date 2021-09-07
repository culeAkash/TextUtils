import React from 'react'
import PropTypes from 'prop-types'

import {Link} from "react-router-dom";

//first custom component it will be exported to app.js
//to change specific values in original skeleton 
//we use props and use that props.variable to include

export default function Navbar(props) {

  // const myStyle={
  //   color: 'white',
  //   paddingRight: '20px'
  // };

  // const myStyle={
  //   borderRadius:'100%',
  //   padding:'12px'
  // };


    return (
      <>
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>{/*to convert a line of html into javascript code*/}
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>
        </ul>
        
        <div className="form-check form-switch mx-2">
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`}  htmlFor="flexSwitchCheckDefault">Enable {props.mode==='light'?'Dark':'Light'} Mode</label>
</div>
    </div>
  </div>
</nav>
        </div>
        </>
    )
}

//setting the proptypes so  that in future we dont pass other data types
//it will give error if we do so
Navbar.propTypes= {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
};


//if no data is passed regarding the props these defaults will be rendered
Navbar.defaultProps={
    title: "set title here",
    aboutText: "About"
};
