import { string } from "prop-types";
import styles from "./CartItem.module.css";

export function CartItem(props) {
  return (
    <>
      <div className={styles.cartItemContainer}>
        <img
          className={styles.cartItemImage}
          src={props.image}
          alt={props.title}
        />
        <div className={styles.infoContainer}>
          <div>{props.title}</div>
          <div className={styles.cartPrice}>
            <div className={styles.cardCountContainer}>
              <div>{props.count}</div>
            </div>
            <div>{props.price}</div>
          </div>
        </div>
      </div>
    </>
  );
}

CartItem.propTypes = {
  title: string,
  count: string,
  price: string,
  image: string,
};
