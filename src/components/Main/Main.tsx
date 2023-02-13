import React from 'react'
import './Main.scss'
import Card from '../Main/Card'

interface MainProps {
  searchValue: any,
  handleCartItem: any
}

const Main: React.FC<MainProps> = ( { searchValue, handleCartItem }) => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetch('https://dummyjson.com/products?limit=100').then(res => {
      return res.json();
      }).then(data => {
        setProducts(data.products)
      })
  }, [])

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
          <h1>{ searchValue ? `Search by: ${searchValue}` : 'All products:' }</h1>
          <ul className="products-container">
            {products.filter((item: any) => item.title.toLowerCase().includes(`${searchValue.toLowerCase()}`)).map((item: any, index: number) => (
                
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

                  onPlus={(obj: { title: string, thumbnail: string, price: number }) => handleCartItem(obj)}
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