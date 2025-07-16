import styles from './ProductCard.module.css';

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <img
        className={styles.image}
        src="https://via.placeholder.com/150"
        alt="Product"
      />
      <h3 className={styles.title}>Awesome Product</h3>
      <p className={styles.price}>₹999</p>
      <button className={styles.button}>Buy Now</button>
    </div>
  );
};

export default ProductCard;
