import { array } from "prop-types";
import { CartItem } from "./CartItem.jsx";
import styles from "./Shopping.module.css";

export function Shopping(props) {
  const itemCount = props.cart.reduce((prev, curr) => {
    if (!prev[curr.id]) {
      prev[curr.id] = { ...curr, count: 1 };
    } else {
      prev[curr.id].count += 1;
    }
    return prev;
  }, {});

  return (
    <>
      <h2>Shopping page</h2>
      <div className={styles.shoppingContainer}>
        {Object.values(itemCount).map((item, index) => (
          <CartItem
            key={index}
            title={item.title}
            count={`x${item.count}`}
            price={`$${item.price}`}
            image={item.image}
          />
        ))}
      </div>
    </>
  );
}

Shopping.propTypes = {
  cart: array,
};
