import React from 'react'
import './Filters.scss'
import './Products.scss'
import Card from '../Main/Card'
const products = [{"id":1,"title":"iPhone 9","description":"An apple mobile which is nothing like apple","price":549,"discountPercentage":12.96,"rating":4.69,"stock":94,"brand":"Apple","category":"smartphones","thumbnail":"https://i.dummyjson.com/data/products/1/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/1/1.jpg","https://i.dummyjson.com/data/products/1/2.jpg","https://i.dummyjson.com/data/products/1/3.jpg","https://i.dummyjson.com/data/products/1/4.jpg","https://i.dummyjson.com/data/products/1/thumbnail.jpg"]},{"id":2,"title":"iPhone X","description":"SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...","price":899,"discountPercentage":17.94,"rating":4.44,"stock":34,"brand":"Apple","category":"smartphones","thumbnail":"https://i.dummyjson.com/data/products/2/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/2/1.jpg","https://i.dummyjson.com/data/products/2/2.jpg","https://i.dummyjson.com/data/products/2/3.jpg","https://i.dummyjson.com/data/products/2/thumbnail.jpg"]},{"id":3,"title":"Samsung Universe 9","description":"Samsung's new variant which goes beyond Galaxy to the Universe","price":1249,"discountPercentage":15.46,"rating":4.09,"stock":36,"brand":"Samsung","category":"smartphones","thumbnail":"https://i.dummyjson.com/data/products/3/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/3/1.jpg"]},{"id":4,"title":"OPPOF19","description":"OPPO F19 is officially announced on April 2021.","price":280,"discountPercentage":17.91,"rating":4.3,"stock":123,"brand":"OPPO","category":"smartphones","thumbnail":"https://i.dummyjson.com/data/products/4/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/4/1.jpg","https://i.dummyjson.com/data/products/4/2.jpg","https://i.dummyjson.com/data/products/4/3.jpg","https://i.dummyjson.com/data/products/4/4.jpg","https://i.dummyjson.com/data/products/4/thumbnail.jpg"]}]
// async function getProducts() {
//   const response = await fetch('https://dummyjson.com/products?limit=100')
//   .then((resolve) => {
//     return resolve.json();
//   })
//   .then((data) => {
//     return data.products;
//   })
//   return response;
// }

function Main () {
  // const [count, setCount] = React.useState(0);
  // const plus = () => setCount(count + 1);
  // const minus = () => count > 0 ? setCount(count - 1) : 0;
  // return (
  //   <div>
  //     <h1>{count}</h1>
  //     <button onClick={plus}>+</button>
  //     <button onClick={minus}>-</button>
  //   </div>
  // );

  return (
    <div className="main-container">
      <div className="store-container">
        <div className="store-filters">
          <button className="filter__btn">Reset</button>
          <button className="filter__btn">Copy link</button>
          <div className="filters-container">
            <div className="filter-category filter-block"><h3>Category</h3>
            <hr />
            <ul>
              <li>
                <input type="checkbox" id="smartphones" />
                <label htmlFor='smartphones'>Smartphones</label>
              </li>

              <li>
                <input type="checkbox" id="laptops" />
                <label htmlFor='laptops'>Laptops</label>
              </li>

              <li>
                <input type="checkbox" id="fragrances" />
                <label htmlFor='fragrances'>Fragrances</label>
              </li>

              <li>
                <input type="checkbox" id="skincare" />
                <label htmlFor='skincare'>Skincare</label>
              </li>

              <li>
                <input type="checkbox" id="groceries" />
                <label htmlFor='groceries'>Groceries</label>
              </li>

              <li>
                <input type="checkbox" id="home-decoration" />
                <label htmlFor='home-decoration'>Home-decoration</label>
              </li>

              <li>
                <input type="checkbox" id="furniture" />
                <label htmlFor='furniture'>Furniture</label>
              </li>
            </ul>
          </div>

          <div className="filter-category filter-block"><h3>Price</h3>
            <hr />
              <div className="amount-container">
                  <span className="min-amount">10$</span>
                  <div>&hArr;</div>
                  <span className="max-amount">100$</span>
              </div>
              <input type="range" min={1} max={100}/>

          </div>

          </div>
        </div>
        <div className="store-products">
          <ul className="products-container">
            {products.map((item: any) => (
                
                <Card
                  title={item.title} description={item.description}
                  thumbnail={item.thumbnail} price={item.price}
                  brand={item.brand} category={item.category}
                  discountPercentage={item.discountPercentage}
                  stock={item.stock} rating={item.rating}
                  onClick={() => console.log(item)}
                />
              ))
            }
          </ul>
        </div>
      </div>
    </div>
    )
}

export default Main;