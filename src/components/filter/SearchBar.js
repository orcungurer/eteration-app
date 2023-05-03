import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../../store/filter-slice";
import SearchBarIcon from "../icons/SearchBarIcon";
import classes from "./SearchBar.module.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchbar = useSelector((state) => state.filter.searchbar);

  const inputChangeHandler = (event) => {
    dispatch(filterActions.setSearchbar(event.target.value));
  };

  return (
    <div className={classes.searchbar}>
      <label htmlFor="search">
        <SearchBarIcon />
      </label>
      <input
        type="text"
        id="search"
        placeholder="Search"
        value={searchbar}
        onChange={inputChangeHandler}
      />
    </div>
  );
};

export default SearchBar;
