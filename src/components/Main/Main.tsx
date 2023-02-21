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
  added: any;
}

const Main: React.FC<MainProps> = ({
  searchValue,
  handleCartItem,
  initCartItems,
  added,
}) => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get(
        "https://63e896464f3c6aa6e7bfec49.mockapi.io/cart"
      );
      const itemsResponse = await axios.get(
        "https://dummyjson.com/products?limit=12"
      );

      initCartItems(cartResponse.data);
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
          <h1>{searchValue ? `Search by: ${searchValue}` : "All products:"}</h1>
          <ul className='products-container'>
            {products
              .filter((item: any) =>
                item.title
                  .toLowerCase()
                  .includes(`${searchValue.toLowerCase()}`)
              )
              .map((item: any) => (
                <Card
                  key={item.id}
                  id={item.id}
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
                    id: string;
                    title: string;
                    thumbnail: string;
                    price: number;
                  }) => handleCartItem(obj)}
                  added={() => added(item.id)}
                />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;
