import { ProductCard } from "./ProductCard.jsx";
import styles from "./HomePage.module.css";
import { array, func } from "prop-types";

export function HomePage(props) {
  return (
    <>
      <h2>Home page</h2>
      <div className={styles.cardsContainer}>
        {props.products.map((product) => (
          <ProductCard
            onClick={() => props.onClick(product)}
            key={product.id}
            title={product.title}
            image={product.image}
          />
        ))}
      </div>
    </>
  );
}

HomePage.propTypes = {
  products: array,
  handleAddCart: func,
  onClick: func,
};
