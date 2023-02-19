import React from "react";
import "./Main.scss";
import axios from "axios";
import Card from "../Main/Card";

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

interface MainProps {
  searchValue: any;
  handleCartItem: any;
  initCartItems: any;
}

const Main: React.FC<MainProps> = ({
  searchValue,
  handleCartItem,
  initCartItems,
}) => {
  console.log("Main started");
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=12")
      // .get("https://63e896464f3c6aa6e7bfec49.mockapi.io/products")
      .then((res) => {
        setProducts(res.data.products);
        // return setProducts(res.data);
      });

    axios
      .get("https://63e896464f3c6aa6e7bfec49.mockapi.io/cart")
      .then((res) => {
        initCartItems(res.data);
      });
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
          <h1>{searchValue ? `Search by: ${searchValue}` : "All products:"}</h1>
          <ul className='products-container'>
            {products
              .filter((item: any) =>
                item.title
                  .toLowerCase()
                  .includes(`${searchValue.toLowerCase()}`)
              )
              .map((item: any, index: number) => (
                <Card
                  key={index}
                  title={item.title}
                  description={item.description}
                  thumbnail={item.thumbnail}
                  price={item.price}
                  brand={item.brand}
                  category={item.category}
                  discountPercentage={item.discountPercentage}
                  stock={item.stock}
                  rating={item.rating}
                  onPlus={(obj: {
                    title: string;
                    thumbnail: string;
                    price: number;
                  }) => handleCartItem(obj)}
                />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;
