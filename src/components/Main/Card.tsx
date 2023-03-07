import React from "react";
import "./Card.scss";
import plus from "./../../assets/icons/plus.svg";
import plusChecked from "../../../src/assets/icons/plusChecked.svg";
import ContentLoader from "react-content-loader";
import { AppContext } from "../context/AppContext";
import { CartItemsContextType } from "../context/AppContext";

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
  isLoading: boolean;
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
  isLoading,
}) => {
  const { cartItems, isItemAdded } = React.useContext(
    AppContext
  ) as CartItemsContextType;

  const onClickPlus = () => {
    id = id.toString();
    console.log(id, typeof id);
    onPlus({ id, title, thumbnail, price });
  };

  return (
    <li className='card'>
      {isLoading ? (
        <ContentLoader
          speed={2}
          width={230}
          height={350}
          viewBox='0 0 230 350'
          backgroundColor='#f3f3f3'
          foregroundColor='#ecebeb'
        >
          <rect x='10' y='64' rx='10' ry='10' width='198' height='121' />
          <rect x='10' y='199' rx='5' ry='5' width='139' height='14' />
          <rect x='138' y='222' rx='0' ry='0' width='7' height='1' />
          <rect x='10' y='218' rx='5' ry='5' width='139' height='14' />
          <rect x='10' y='239' rx='5' ry='5' width='139' height='14' />
          <rect x='10' y='259' rx='5' ry='5' width='139' height='14' />
          <rect x='10' y='290' rx='7' ry='7' width='51' height='38' />
          <rect x='27' y='30' rx='5' ry='5' width='159' height='16' />
          <rect x='156' y='290' rx='7' ry='7' width='51' height='38' />
        </ContentLoader>
      ) : (
        <>
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
              src={isItemAdded(id) ? plusChecked : plus}
              onClick={onClickPlus}
              className='add-btn'
              alt='add-btn'
            ></img>
          </div>
        </>
      )}
    </li>
  );
};

export default Card;
