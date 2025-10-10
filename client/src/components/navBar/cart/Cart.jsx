import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeFromCart,
  clearCart,
  getCartItems,
} from "@/features/cart/cartSlice.jsx";
import styles from "./Cart.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector(getCartItems);

  const total = items.reduce(
    (sum, item) => sum + item.productPrice * item.quantity,
    0
  );

  const cartItems = (
    <>
      {items.map((item) => (
        <div key={item.productId} className={styles.cartItem}>
          <img src={item.image} alt={item.productTitle} width="60" />
          <div className={styles.details}>
            <h4>{item.productTitle}</h4>
            <p>₹ {item.productPrice.toFixed(2)}</p>
            <div className={styles.qtyControls}>
              <RemoveIcon
                onClick={() => dispatch(decreaseQty(item.productId))}
              />
              <span>{item.quantity}</span>
              <AddIcon onClick={() => dispatch(increaseQty(item.productId))} />
            </div>
          </div>
          <button onClick={() => dispatch(removeFromCart(item.productId))}>
            Remove
          </button>
        </div>
      ))}

      <hr />
      <h3>Total: ₹{total.toFixed(2)}</h3>
      <button
        className={styles.checkoutBtn}
        onClick={() => dispatch(clearCart())}
      >
        Checkout
      </button>
      <button className={styles.clearBtn} onClick={() => dispatch(clearCart())}>
        Clear Cart
      </button>
    </>
  );

  return (
    <div className={styles.cart}>
      <h2>Shopping Cart</h2>
      {items.length === 0 ? <p>Your cart is empty.</p> : cartItems}
    </div>
  );
};

export default Cart;
