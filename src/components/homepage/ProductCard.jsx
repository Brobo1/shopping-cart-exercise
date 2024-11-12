import styles from "./ProductCard.module.css";
import cartImage from "../../assets/shopping_cart_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import { func, string } from "prop-types";

export function ProductCard(props) {
  return (
    <>
      <div className={styles.cardContainer}>
        <p className={styles.productTitle}>{props.title}</p>
        <img
          className={styles.productImage}
          src={props.image}
          alt={props.title}
        />
        <button
          className={styles.cartButton}
          type={"button"}
          onClick={props.onClick}
        >
          <img className={styles.cartImage} src={cartImage} alt="Cart image" />
        </button>
      </div>
    </>
  );
}

ProductCard.propTypes = {
  image: string,
  title: string,
  onClick: func,
  handleAddCart: func,
};
