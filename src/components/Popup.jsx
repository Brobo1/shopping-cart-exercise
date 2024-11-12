import { array, func, object } from "prop-types";
import styles from "./Popup.module.css";

export function Popup(props) {
  console.log();
  return (
    <>
      <div className={styles.popupContainer}>
        <p className={styles.popupProductText}>{props.product.title} </p>
        <p className={styles.popupAddedText}>added to cart</p>
      </div>
    </>
  );
}

Popup.propTypes = {
  onClick: func,
  cart: array,
  product: object,
};
