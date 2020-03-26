import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// HeaderLink component
const HeaderLink = props => {
  const { href, ...routeData } = props;
  const { to } = routeData;
  return (
    <NavLink
      exact
      className="p1 mx2 black rounded text-decoration-none"
      activeClassName="bg-white"
      to={to}
    >
      {href}
    </NavLink>
  );
};

const Header = () => (
  <header className="flex items-center justify-between px4 mx2 border-bottom-dashed">
    <h1 className="h1">My Recipes</h1>
    <nav>
      <HeaderLink href="Home" to="/" />
      <HeaderLink href="Favourites" to="/favourites" />
      <HeaderLink href="About" to="/about" />
      <HeaderLink href="Contact" to="/contact" />
    </nav>
  </header>
);

HeaderLink.propTypes = {
  href: PropTypes.string,
  to: PropTypes.string,
};
export default Header;
