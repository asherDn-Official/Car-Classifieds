import { Link, Navigate, useNavigate } from "react-router-dom";
import { Dropdown, NavDropdown } from "react-bootstrap";

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="sidebar-wrapper">
      <nav id="sidebar">
        <ul
          style={{ display: "flex", flexDirection: "column" }}
          className="list-unstyled components"
        >
          <li>
            <Link to="/admin/dashboard">
              <i className="fas fa-tachometer-alt"></i> Dashboard
            </Link>
          </li>

          <li>
            <NavDropdown title={<i>Product</i>}>
              <NavDropdown.Item onClick={() => navigate("/admin/products")}>
                <i style={{ color: "black" }}>All</i>
              </NavDropdown.Item>

              <NavDropdown.Item
                onClick={() => navigate("/admin/products/create")}
              >
                <i style={{ color: "black" }}>Create</i>
              </NavDropdown.Item>
            </NavDropdown>
          </li>

          <li>
            <Link to="/admin/orders">
              <i className="fa fa-shopping-basket"></i> Orders
            </Link>
          </li>

          <li>
            <Link to="/admin/users">
              <i className="fas fa-users"></i> Users
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
