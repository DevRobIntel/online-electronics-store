import React from 'react';
import { items } from '../Items.json';
import styles from '../styles/ShortcutSection.module.css';

const ShortcutSection = () => {
  // Check if items.items exists and if bootstrap is defined
  const bootstrap = items && items.items && items.items.bootstrap ? items.items.bootstrap : [];

  return (
    <section className={styles.shortcutSection}>
      {/* Display shortcuts if bootstrap is an array */}
      <ul>
        {Array.isArray(bootstrap) && bootstrap.map(shortcut => (
          <li key={shortcut.id}>
            <a href={shortcut.url}>{shortcut.title}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ShortcutSection;
