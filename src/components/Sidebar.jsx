import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <aside>
      <h2>Categories</h2>
      <nav aria-label="Product categories">
        <NavLink to="electronics">Electronics</NavLink>
        <NavLink to="fashion">Fashion</NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
