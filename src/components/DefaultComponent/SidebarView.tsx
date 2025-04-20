import { NavLink } from "react-router-dom";
import {
  FaFileAlt,
  FaUser,
  FaThLarge,
  FaUsers,
  FaGraduationCap,
  FaSignOutAlt,
} from "react-icons/fa";

const SidebarView: React.FC = () => {
  return (
    <div className="sidebar">
      <img srcSet="/images/logo.png 2x" alt="logo" className="logo" />
      <div className="sidebar-icon">
        <NavLink
          to="/files"
          className={({ isActive }: { isActive: boolean }) =>
            `icon ${isActive ? "activeIcon" : ""}`
          }
        >
          <FaFileAlt />
        </NavLink>
        <NavLink
          to="/contacts"
          className={({ isActive }: { isActive: boolean }) =>
            `icon ${isActive ? "activeIcon" : ""}`
          }
        >
          <FaUser />
        </NavLink>
        <NavLink
          to="/opportunites"
          className={({ isActive }: { isActive: boolean }) =>
            `icon ${isActive ? "activeIcon" : ""}`
          }
        >
          <FaThLarge />
        </NavLink>
        <NavLink
          to="/groups"
          className={({ isActive }: { isActive: boolean }) =>
            `icon ${isActive ? "activeIcon" : ""}`
          }
        >
          <FaUsers />
        </NavLink>
        <NavLink
          to="/tasks"
          className={({ isActive }: { isActive: boolean }) =>
            `icon ${isActive ? "activeIcon" : ""}`
          }
        >
          <FaGraduationCap />
        </NavLink>
      </div>
      <NavLink to="/" className="icon exitIcon">
        <FaSignOutAlt />
      </NavLink>
    </div>
  );
};

export default SidebarView;
