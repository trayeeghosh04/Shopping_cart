import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
    const { cartTotalQuantity } = useSelector(state => state.cart);
    return <nav className="nav-bar">
     <Link to= "/">
     <h2>Shopping </h2>
     </Link>
      <Link to= "/cart"> 
        <div className="nav-bag">
            <h4>Go to cart</h4>
        <span className="bag-quantity">
            <span>{cartTotalQuantity}</span>
        </span>
        </div>
        </Link> 
    </nav>
}
 
export default NavBar;