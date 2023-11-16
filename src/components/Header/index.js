// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="main-nav-content">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="website-logo"
      />
      <ul className="main-nav-menu">
        <li>
          <Link to="/" className="nav-links">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="nav-links">
            Products
          </Link>
        </li>
        <li>
          <Link to="/cart" className="nav-links">
            Cart
          </Link>
        </li>
      </ul>
      <button type="button" className="logout-button">
        Logout
      </button>
      <button type="button" className="logout-mb-btn">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
          className="logout-image"
        />
      </button>
    </div>
  </nav>
)

export default Header
