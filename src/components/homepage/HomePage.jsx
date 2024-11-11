import { ProductCard } from "./ProductCard.jsx";
import styles from "./HomePage.module.css";

export function HomePage(props) {
  return (
    <>
      <h2>Home page</h2>
      <div className={styles.cardsContainer}>
        {props.products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            image={product.image}
          />
        ))}
      </div>
    </>
  );
}
