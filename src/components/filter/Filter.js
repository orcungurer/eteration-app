import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../../store/filter-slice";
import Card from "../ui/Card";
import classes from "./Filter.module.css";
import FilterItem from "./FilterItem";
import Select from "react-select";

const Filter = () => {
  const selectedBrands = useSelector((state) => state.filter.selectedBrands);
  const selectedModels = useSelector((state) => state.filter.selectedModels);

  // listing every unique brands & models alphabetically.
  const brands = useSelector((state) => {
    const allBrands = state.product.products.map((product) => product.brand);
    allBrands.sort((a, b) => a.localeCompare(b));
    return [...new Set(allBrands)];
  });

  const models = useSelector((state) => {
    const allModels = state.product.products.map((product) => product.model);
    allModels.sort((a, b) => a.localeCompare(b));
    return [...new Set(allModels)];
  });

  const dispatch = useDispatch();

  const toggleBrandHandler = (brand) => {
    dispatch(filterActions.selectedBrand(brand));
  };

  const toggleModelHandler = (model) => {
    dispatch(filterActions.selectedModel(model));
  };

  const filterItems = [
    {
      title: "Brands",
      items: brands,
      selectedItems: selectedBrands,
      toggleItemHandler: toggleBrandHandler,
    },
    {
      title: "Models",
      items: models,
      selectedItems: selectedModels,
      toggleItemHandler: toggleModelHandler,
    },
  ];

  // SORT BY
  const groupedOptions = [
    { value: "default", label: "Sort By" },
    {
      label: "Price",
      options: [
        { value: "priceAsc", label: "(Low-High)" },
        { value: "priceDesc", label: "(High-Low)" },
      ],
    },
    {
      label: "Created",
      options: [
        { value: "createdAsc", label: "(Old-New)" },
        { value: "createdDesc", label: "(New-Old)" },
      ],
    },
  ];

  const sortingHandler = (event) => {
    dispatch(filterActions.selectedSort(event.value));
  };

  const customTheme = (theme) => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary50: "#000000",
      primary25: "#f2f2f2",
      primary: "#000000",
    },
  });

  return (
    <div className={classes.filter}>
      <div className={classes["select-filter"]}>
        <div className={classes.sortBy}>
          <Select
            options={groupedOptions}
            defaultValue={groupedOptions[0]}
            onChange={sortingHandler}
            theme={customTheme}
          />
        </div>
      </div>
      {filterItems.map((filterItem) => (
        <Card key={filterItem.title} className={classes.card}>
          <div className={classes.filters}>
            <FilterItem
              title={filterItem.title}
              items={filterItem.items}
              selectedItems={filterItem.selectedItems}
              toggleItemHandler={filterItem.toggleItemHandler}
            />
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Filter;
