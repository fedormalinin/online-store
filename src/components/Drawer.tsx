import './Drawer.scss'

interface DrawerProps {
  onClose: any,
  products: any
}

const Drawer: React.FC<DrawerProps> = ({ onClose, products }) => {
  return (
    <div className="overlay">
    <div className="drawer">
      <div className="cart-header">
        <h2>Cart</h2>
        <div onClick={onClose} className="close-drawer"></div>
      </div>
      <div className="cart-items-wrap">
      <ul className="cart-items-container">

        {products.map((product: any) => {
                return <li className="cart-item">
                  <div className="item-content-container">
                    <div className="product-image" style={{ backgroundImage: `url(${product.thumbnail})`}}></div>
                      <div className="product-info">
                        <div className="product-info__product-title">{product.title}</div>
                        <div className="product-info__product-price">{product.price}$</div>
                      </div>
                    </div>
                  <div className="product-delete"></div>
                </li>
        })}

      </ul>
      </div>
    <div className="order-price">Total price: 1500 $</div>
    <button className="order-btn">Make an order </button>
    </div>
  </div>
  )
}

export default Drawer;