import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/cart/Cart";
import Filter from "./components/filter/Filter";
import Layout from "./components/layout/Layout";
import ProductDetail from "./components/products/ProductDetail";
import Products from "./components/products/Products";
import { cartActions } from "./store/cart-slice";
import { fetchProductData } from "./store/product-slice";

function App() {
  const dispatch = useDispatch();
  const showProductDetails = useSelector((state) => state.ui.productDetails);

  useEffect(() => {
    dispatch(fetchProductData());

    // local storage
    const cartData = JSON.parse(localStorage.getItem("cartItems"));
    if (cartData) {
      dispatch(
        cartActions.replaceCart({
          items: cartData.items,
          totalPrice: cartData.totalPrice,
          totalQuantity: cartData.totalQuantity,
        })
      );
    }
  }, [dispatch]);

  return (
    <Layout>
      {!showProductDetails && (
        <Fragment>
          <Filter />
          <Products />
        </Fragment>
      )}
      {showProductDetails && <ProductDetail />}
      <Cart />
    </Layout>
  );
}

export default App;
