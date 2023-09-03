import { useSelector } from "react-redux";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
const Header = () => {
  const itemList = useSelector((state) => state.cart.itemList);

  return (
    <nav>
      <h3>Shopping Cart</h3>
      <Link to="cart">
        <div className="cartIcon">
          <span>{itemList.length}</span>
          <FaCartPlus className="cart_icon" />
        </div>
      </Link>
    </nav>
  );
};

export default Header;
