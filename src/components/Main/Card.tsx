import React from 'react'
import product from './../../assets/img/products/1.jpg'
import cartIcon from './../../assets/icons/cart.svg'
import './Card.scss'
import plus from './../../../src/assets/icons/plus.svg'
import plusChecked from './../../../src/assets/icons/plusChecked.svg'

const Card = (props: any) => {
  const [isAdded, setIsAdded] = React.useState(false);

  const onPlus = () => {
    setIsAdded(!isAdded);
  }
  React.useEffect(() => {
    console.log('isAdded изменился')
  }, [isAdded])

  return (
    <li className="card">
      <div className="product__name">{props.title}</div>
      <div className="product__img-container">
        <img className="product__img" src={props.thumbnail} alt="product" />
      </div>
      <div className="product__sub">
        <p>{props.description}</p>
        <p>Brand: {props.brand}</p>
        <p>Price: {props.price}$</p>
        <p>Discount: {props.discountPercentage}</p>
        <p>Rating: {props.rating}</p>
        <p>Stock: {props.stock}</p>
        <p>Category: {props.category}</p>
      </div>

      <img src={isAdded ? plusChecked : plus} onClick={onPlus} className="add-btn"></img>
    </li>
  )
}

export default Card;