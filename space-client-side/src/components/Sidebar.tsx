import { Link } from 'react-router';
import styles from './Sidebar.module.css';

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebarContainer}>
      <aside className={styles.sidebar}>
        <ul>
          <li><Link to="/googogaga">Googogaga</Link></li>
          <li><Link to="/watage">Watage</Link></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#clients">Clients</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#clients">Clients</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#clients">Clients</a></li>
          <li><a href="#contact">Contajfjdskfjkdslfct</a></li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;