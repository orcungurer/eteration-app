import { useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import CartIcon from "../icons/CartIcon";

const CartButton = () => {
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.badge}>${totalPrice.toFixed(2)}</span>
    </button>
  );
};

export default CartButton;
