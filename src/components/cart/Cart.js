import classes from "./Cart.module.css";
import Card from "../ui/Card";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  let content = (
    <p className={classes[`empty-cart`]}>🛒 Start adding items to your cart!</p>
  );

  if (totalQuantity > 0) {
    content = (
      <Fragment>
        <ul className={classes.items}>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={{
                id: item.id,
                name: item.name,
                price: item.price,
                total: item.total,
                quantity: item.quantity,
              }}
            />
          ))}
        </ul>
        <div className={classes.checkout}>
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
          <button>Checkout</button>
        </div>
      </Fragment>
    );
  }

  return (
    <div className={classes.cart}>
      <Card>
        {content}
      </Card>
    </div>
  );
};

export default Cart;