import { NavLink } from 'react-router';
import styles from './Sidebar.module.css';

const Sidebar: React.FC = () => {
  const navLinks = [
    { to: "/googogaga", label: "Googogaga" },
    { to: "/watage", label: "Watage" },
    { to: "/home", label: "Home" },
    { to: "/floorplan", label: "Floor Plan" },
  ];
  return (
    <div className={styles.sidebarContainer}>
      <aside className={styles.sidebar}>
      <ul>
        {navLinks.map((link, index) => (
          <li key={index}>
            <NavLink 
            to={link.to} 
            className={({ isActive }) => isActive ? styles.activeLink : undefined}
            >{link.label}
            </NavLink>
          </li>
  ))}
</ul>
      </aside>
    </div>
  );
};

export default Sidebar;