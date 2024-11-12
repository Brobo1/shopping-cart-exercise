import { array, func } from "prop-types";
import { CartItem } from "./CartItem.jsx";
import styles from "./Shopping.module.css";

export function Shopping(props) {
  let totalPrice = 0;

  return (
    <>
      <h2>Shopping page</h2>
      <div className={styles.shoppingContainer}>
        {props.cart.map((item, index) => {
          totalPrice += item.price * item.count;
          return (
            <CartItem
              key={index}
              title={item.title}
              count={`x${item.count}`}
              price={`$${(item.price * item.count).toFixed(2)}`}
              image={item.image}
              increment={() => props.increment(item.id)}
              decrement={() => props.decrement(item.id)}
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
