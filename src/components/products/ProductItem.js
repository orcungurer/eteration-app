import classes from "./ProductItem.module.css";
import Card from "../ui/Card";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { uiActions } from "../../store/ui-slice";

const ProductItem = (props) => {
  const { id, image, price, brand, model, name, description } = props;
  const dispatch = useDispatch();

  const addToCartHandler = (event) => {
    event.stopPropagation();
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        price: +price,
      })
    );
  };

  const showProductDetailsHandler = () => {
    dispatch(
      uiActions.showProductDetails({
        id,
        image,
        name,
        price,
        description,
      })
    );
  };

  return (
    <li className={classes.item} onClick={showProductDetailsHandler}>
      <Card className={classes.card}>
        <img src={image} alt={name} />
        <div className={classes.price}>${price}</div>
        <div className={classes.product}>
          <p className={classes.name}>{name}</p>
          <p className={classes.brand}>
            {brand}-{model}
          </p>
        </div>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
