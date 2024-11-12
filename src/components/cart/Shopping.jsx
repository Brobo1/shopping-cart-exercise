import { array, func } from "prop-types";
import { CartItem } from "./CartItem.jsx";
import styles from "./Shopping.module.css";
import { useEffect } from "react";

export function Shopping(props) {
  const itemCount = props.cart.reduce((prev, curr) => {
    if (!prev[curr.id]) {
      prev[curr.id] = { ...curr, count: 1 };
    } else {
      prev[curr.id].count += 1;
    }
    return prev;
  }, {});

  let totalPrice = 0;

  function increment(product) {
    itemCount[product].count += 1;
    console.log(itemCount);
  }

  return (
    <>
      <h2>Shopping page</h2>
      <div className={styles.shoppingContainer}>
        {Object.values(itemCount).map((item, index) => {
          totalPrice += item.price * item.count;
          return (
            <CartItem
              key={index}
              title={item.title}
              count={`x${item.count}`}
              price={`$${item.price * item.count}`}
              image={item.image}
              increment={() => increment(item.id)}
              decrement={props.decrement}
            />
          );
        })}
        <p className={styles.totalPrice}>
          Total price: ${totalPrice.toFixed(2)}
        </p>
      </div>
    </>
  );
}

Shopping.propTypes = {
  cart: array,
  increment: func,
  decrement: func,
};
