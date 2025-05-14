import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <div className={styles.stickyHeader}>
    <header>
      <div className={styles.logo}>SpaceMonitor</div>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </header>
    </div>
  );
};

export default Header;