
import React,{ Component } from 'react';

const Navbar = ({totalCounter}) => {
    return (
        <nav className="navbar navbar-light bg-light">
<div className="container-fluid">
<span className="navbar-brand mb-0 h1">Navbar <span className="badge badge-pill badge-secondary">{totalCounter}</span> </span> 
</div>
</nav>
    );
}
export default Navbar;