import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const { id, name, price, total, quantity } = props.item;
  const dispatch = useDispatch();

  const removeItemFromCartHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addItemToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        price: +price,
      })
    );
  };

  return (
    <li className={classes.item}>
      <div className={classes.details}>
        <p className={classes.name}>{name}</p>
        <p className={classes.total}>${total.toFixed(2)}</p>
      </div>
      <div className={classes.actions}>
        <button
          onClick={removeItemFromCartHandler}
          className={classes.decrease}
        >
          -
        </button>
        <span>{quantity}</span>
        <button onClick={addItemToCartHandler} className={classes.increase}>
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
