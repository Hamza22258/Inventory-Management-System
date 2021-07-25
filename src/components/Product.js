import React from "react";
var item_count = 0;
export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className="col4">
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <div>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  );
}
