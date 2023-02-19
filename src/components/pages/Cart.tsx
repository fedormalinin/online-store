import React from "react";
import Calc from "./Calc";

const Cart = () => {
  const [visibleList, setVisibleList] = React.useState(true);

  const toggleVisibleList = () => {
    setVisibleList((visible) => !visible);
  };

  return (
    <div>
      <div>{visibleList && <Calc />}</div>
      <button onClick={toggleVisibleList}>Show/hide</button>
    </div>
  );
};

export default Cart;
