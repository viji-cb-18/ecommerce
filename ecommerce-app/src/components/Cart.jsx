import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../store/cartSlice";
import { Link } from "react-router-dom";

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="card p-3">
      <h3>Shopping Cart</h3>
      {cartItems.length === 0 ? (
        <p>No items in cart. <Link to="/">Go back to shopping</Link></p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item d-flex align-items-center justify-content-between p-2 border-bottom">
              <img src={item.image} alt={item.name} style={{ width: "50px", height: "50px" }} />
              <div className="flex-grow-1 mx-3">
                <h6>{item.name}</h6>
                <p>${item.price} x {item.quantity} = ${item.price * item.quantity}</p>
                <div className="d-flex align-items-center">
                  <button className="btn btn-secondary btn-sm me-2" onClick={() => dispatch(updateQuantity({ id: item.id, quantity: Math.max(1, item.quantity - 1) }))}>-</button>
                  <span>{item.quantity}</span>
                  <button className="btn btn-secondary btn-sm ms-2" onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button>
                </div>
              </div>
              <button className="btn btn-danger btn-sm" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
            </div>
          ))}
          <h5 className="mt-3">Total: ${totalPrice.toFixed(2)}</h5>
          <button className="btn btn-success mt-2">Proceed to Checkout</button>
        </>
      )}
    </div>
  );
}

export default Cart;
