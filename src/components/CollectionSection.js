import React from 'react';
import { items } from '../Items.json';
import styles from '../styles/CollectionSection.module.css';

const CollectionSection = () => {
  // Check if items.items exists and if bootstrap is defined
  const bootstrap = items && items.items && items.items.bootstrap ? items.items.bootstrap : [];

  return (
    <section className={styles.collectionSection}>
      {/* Display collections if it's an array */}
      {Array.isArray(bootstrap) && bootstrap.map(collection => (
        <div key={collection.id} className={styles.collectionItem}>
          <img src={collection.imageUrl} alt={collection.title} />
          <h3>{collection.title}</h3>
          <p>{collection.text}</p>
        </div>
      ))}
    </section>
  );
};

export default CollectionSection;
