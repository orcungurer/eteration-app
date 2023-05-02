import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { uiActions } from "../../store/ui-slice";
import Card from "../ui/Card";
import classes from "./ProductDetail.module.css";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.ui.productDetails);

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: productDetails.id,
        name: productDetails.name,
        price: +productDetails.price,
      })
    );
  };

  const hideProductDetailsHandler = () => {
    dispatch(uiActions.hideProductDetails());
  };

  return (
    <Card className={classes.card}>
      <img
        className={classes.image}
        src={productDetails.image}
        alt={productDetails.name}
      />
      <div className={classes.details}>
        <p className={classes.name}>{productDetails.name}</p>
        <p className={classes.price}>${productDetails.price}</p>
        <button onClick={addToCartHandler}>Add to Cart</button>
        <p className={classes.description}>{productDetails.description}</p>
        <button onClick={hideProductDetailsHandler} className={classes.close}>
          Close
        </button>
      </div>
    </Card>
  );
};

export default ProductDetail;
