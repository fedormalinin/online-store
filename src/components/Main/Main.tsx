import './Filters.scss'
import './Products.scss'
import product from './../../assets/img/products/1.jpg'
import product2 from './../../assets/img/products/2.jpg'
import product3 from './../../assets/img/products/3.jpg'
import product4 from './../../assets/img/products/4.png'

function Main () {
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
          <div className="products-container">

            <div className="product">
              <div className="product__name">Iphone 9</div>
              <div className="product__img-container">
                <img className="product__img" src={product} alt="product" />
              </div>
              <div className="product__sub">
                  <p>Brand: </p>
                  <p>Price: </p>
                  <p>Discount: </p>
                  <p>Rating: </p>
                  <p>Stock: </p>
                  <p>Category: </p>
                </div>
            </div>
            <div className="product">
              <div className="product__name">Iphone 7</div>
              <div className="product__img-container">
                <img className="product__img" src={product2} alt="product" />
              </div>
              <div className="product__sub">
                  <p>Brand: </p>
                  <p>Price: </p>
                  <p>Discount: </p>
                  <p>Rating: </p>
                  <p>Stock: </p>
                  <p>Category: </p>
                </div>
            </div>
            <div className="product">
              <div className="product__name">Iphone 10</div>
              <div className="product__img-container">
                <img className="product__img" src={product3} alt="product" />
              </div>
              <div className="product__sub">
                  <p>Brand: </p>
                  <p>Price: </p>
                  <p>Discount: </p>
                  <p>Rating: </p>
                  <p>Stock: </p>
                  <p>Category: </p>
                </div>
            </div>
            <div className="product">
              <div className="product__name">Laptop</div>
              <div className="product__img-container">
                <img className="product__img" src={product4} alt="product" />
              </div>
              <div className="product__sub">
                  <p>Brand: </p>
                  <p>Price: </p>
                  <p>Discount: </p>
                  <p>Rating: </p>
                  <p>Stock: </p>
                  <p>Category: </p>
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    )
}

export default Main;