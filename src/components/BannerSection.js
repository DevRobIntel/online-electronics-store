import React from 'react';
import { items } from '../Items.json';
import styles from '../styles/BannerSection.module.css';

const BannerSection = () => {
  // Check if items.items exists and if bootstrap is defined
  const bootstrap = items && items.items && items.items.bootstrap ? items.items.bootstrap : [];

  return (
    <section className={styles.bannerSection}>
      {/* Display banners */}
      {bootstrap.map(banner => (
        <div key={banner.id} className={styles.bannerItem}>
          <img src={banner.imageUrl} alt={banner.title} />
        </div>
      ))}
    </section>
  );
};

export default BannerSection;
