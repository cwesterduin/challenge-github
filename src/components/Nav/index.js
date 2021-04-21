import React from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const BackButton = () => {
    const history = useHistory();

    return <button id="back-button" onClick={history.goBack}> back </button>
}


const Nav = () => {
    return (
        <nav className="navbar" role="navigation">
            <NavLink exact to="/" activeClassName="current">home</NavLink>
            <NavLink to="/info" activeClassName="current">info</NavLink>
            <BackButton />
        </nav>
    );
}

export default Nav;
