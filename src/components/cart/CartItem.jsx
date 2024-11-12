import { func, string } from "prop-types";
import styles from "./CartItem.module.css";
import add from "../../assets/add_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import remove from "../../assets/remove_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";

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
              <div className={styles.countButtons}>
                <button type={"button"} onClick={props.increment}>
                  <img src={remove ?? ""} alt="Remove" />
                </button>
                <button type={"button"} onClick={props.decrement}>
                  <img src={add ?? ""} alt="Add button" />
                </button>
              </div>
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
  increment: func,
  decrement: func,
};
