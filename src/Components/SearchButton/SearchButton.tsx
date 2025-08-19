import SearchIcon from '@/Assets/Icons/Search';
import styles from './SearchButton.module.scss';

export default function SearchButton() {
  return (
    <div className={styles.searchButton}>
      <div className={styles.searchButtonIcon}>
        <SearchIcon />
      </div>
    </div>
  );
}
