import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { useState } from "react";

const Products = () => {
  const products = useSelector((state) => state.product.products);
  const searchbar = useSelector((state) => state.filter.searchbar);
  const sortOrder = useSelector((state) => state.filter.selectedSort);
  const selectedBrands = useSelector((state) => state.filter.selectedBrands);
  const selectedModels = useSelector((state) => state.filter.selectedModels);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const filteredProducts = products.filter((product) => {
    if (
      searchbar !== "" &&
      !product.name.toLowerCase().includes(searchbar.toLowerCase())
    ) {
      return false;
    }
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
      return false;
    }
    if (selectedModels.length > 0 && !selectedModels.includes(product.model)) {
      return false;
    }
    return true;
  });

  if (sortOrder === "default") {
    filteredProducts.sort((a, b) => a.id - b.id);
  } else if (sortOrder === "priceAsc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "priceDesc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortOrder === "createdAsc") {
    filteredProducts.sort(
      (a, b) => Date.parse(a.createdAt) / 1000 - Date.parse(b.createdAt) / 1000
    );
  } else if (sortOrder === "createdDesc") {
    filteredProducts.sort(
      (a, b) => Date.parse(b.createdAt) / 1000 - Date.parse(a.createdAt) / 1000
    );
  }

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const totalPagesArr = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className={classes.products}>
      <ul className={classes["product-items"]}>
        {currentProducts.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            image={product.image}
            price={product.price}
            brand={product.brand}
            model={product.model}
            name={product.name}
            description={product.description}
          />
        ))}
      </ul>
      <ul className={classes.pagination}>
        {totalPagesArr.map((pageNumber) => (
          <li
            key={pageNumber}
            onClick={() => paginate(pageNumber)}
            className={currentPage === pageNumber ? classes.active : ""}
          >
            {pageNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
