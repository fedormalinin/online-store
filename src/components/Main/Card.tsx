import React from "react";
import "./Card.scss";
import plus from "./../../../src/assets/icons/plus.svg";
import plusChecked from "./../../../src/assets/icons/plusChecked.svg";

interface cardProps {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  brand: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  category: string;
  onPlus: any;
  added: any;
}

const Card: React.FC<cardProps> = ({
  id,
  title,
  thumbnail,
  description,
  brand,
  price,
  discountPercentage,
  rating,
  stock,
  category,
  onPlus,
  added = true,
}) => {
  const [isAdded, setIsAdded] = React.useState(added);

  const onClickPlus = () => {
    id = id.toString();
    console.log(id, typeof id);
    onPlus({ id, title, thumbnail, price });
    setIsAdded(!isAdded);
    console.log(isAdded);
  };
  React.useEffect(() => {}, [isAdded]);

  return (
    <li className='card'>
      <div className='product__name'>{title}</div>
      <div className='product__img-container'>
        <img className='product__img' src={thumbnail} alt='product' />
      </div>

      <div className='product__sub'>
        <p>{description}</p>
        <p>Brand: {brand}</p>
        <p>Discount: {discountPercentage}</p>
        <p>Rating: {rating}</p>
        <p>Stock: {stock}</p>
        <p>Category: {category}</p>
      </div>
      <div className='priceContainer'>
        <button onClick={onClickPlus} className='price'>
          {price}$
        </button>
        <img
          src={isAdded ? plusChecked : plus}
          onClick={onClickPlus}
          className='add-btn'
          alt='add-btn'
        ></img>
      </div>
    </li>
  );
};

export default Card;
