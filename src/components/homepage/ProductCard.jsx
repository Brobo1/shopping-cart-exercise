import styles from "./ProductCard.module.css";

export function ProductCard(props) {
  return (
    <>
      <div className={styles.cardContainer}>
        <p>{props.title}</p>
        <img src={props.image} alt={props.title} />
      </div>
    </>
  );
}
