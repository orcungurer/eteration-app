import CartButton from "../cart/CartButton";
import SearchBar from "../filter/SearchBar";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <h1>eteration</h1>
      <SearchBar />
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
