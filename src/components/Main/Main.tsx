import React from "react";
import "./Main.scss";
import axios from "axios";
import Card from "../Main/Card";
import { AppContext, CartItemsContextType } from "../context/AppContext";
import { MainContext, MainContextType } from "../context/MainContext";
import {
  HeaderContext,
  HeaderItemsContextType,
} from "../context/HeaderContext";

const category = [
  "smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
  "furniture",
  "tops",
  "womens-dresses",
];

const Main: React.FC = () => {
  const { addCartItem, setCartItems } = React.useContext(
    AppContext
  ) as CartItemsContextType;

  const { products, setProducts, isLoading, filteredProducts, setIsLoading } =
    React.useContext(MainContext) as MainContextType;
  console.log(products);
  const { handleInputChange } = React.useContext(
    HeaderContext
  ) as HeaderItemsContextType;

  React.useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get(
        "https://63e896464f3c6aa6e7bfec49.mockapi.io/cart"
      );
      const itemsResponse = await axios.get(
        "https://dummyjson.com/products?limit=12"
      );

      setIsLoading(false);
      setCartItems(cartResponse.data);
      setProducts(itemsResponse.data.products);
    }
    fetchData();
    // .get("https://63e896464f3c6aa6e7bfec49.mockapi.io/products")
  }, []);

  return (
    <div className='main-container'>
      <div className='store-container'>
        <div className='store-filters'>
          <button className='filter__btn'>Reset</button>
          <button className='filter__btn'>Copy link</button>
          <div className='filters-container'>
            <div className='filter-category filter-block'>
              <h3>Category</h3>
              <hr />
              <ul>
                {category.map((item, index) => (
                  <li key={index}>
                    <input type='checkbox' id={item} />
                    <label htmlFor={item}>{item}</label>
                  </li>
                ))}
              </ul>
            </div>

            <div className='filter-category filter-block'>
              <h3>Price</h3>
              <hr />
              <div className='amount-container'>
                <span className='min-amount'>10$</span>
                <div>&hArr;</div>
                <span className='max-amount'>100$</span>
              </div>
              <input type='range' min={1} max={100} />
            </div>
          </div>
        </div>
        <div className='store-products'>
          <h1>
            {handleInputChange
              ? `Search by: ${handleInputChange}`
              : "All products:"}
          </h1>
          <ul className='products-container'>
            {(isLoading ? [...Array(8)] : filteredProducts).map(
              (item?: any) => (
                <Card
                  key={item && item.id}
                  id={item && item.id}
                  title={item && item.title}
                  description={item && item.description}
                  thumbnail={item && item.thumbnail}
                  price={item && item.price}
                  brand={item && item.brand}
                  category={item && item.category}
                  discountPercentage={item && item.discountPercentage}
                  stock={item && item.stock}
                  rating={item && item.rating}
                  onPlus={(obj: {
                    id: string;
                    title: string;
                    thumbnail: string;
                    price: number;
                  }) => addCartItem(obj)}
                  isLoading={isLoading}
                />
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;
