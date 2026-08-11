import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">

      <h2>Categories</h2>

      <Link to="electronics">
        Electronics
      </Link>

      <Link to="fashion">
        Fashion
      </Link>

    </aside>
  );
}

export default Sidebar;