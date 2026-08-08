import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <nav aria-label="Main navigation">
        <NavLink to="/">ShopEasy</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
