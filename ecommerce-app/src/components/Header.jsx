import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

function Header({ cartCount }) {
  return (
    <nav className="navbar navbar-dark bg-dark p-3">
      <Link className="navbar-brand text-white" to="/">E-Commerce</Link>
      <Link to="/cart" className="cart-button text-white">
        <FaShoppingCart className="cart-icon" size={24} />
        <span className="badge bg-danger ms-2">{cartCount}</span>
      </Link>
    </nav>
  )
}

export default Header
