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
        to="/education"
        className={({ isActive }: { isActive: boolean }) =>
          `icon ${isActive ? "active" : ""}`
        }
      >
        <FaGraduationCap />
      </NavLink>

      <NavLink to="/logout" className="icon exitIcon">
        <FaSignOutAlt />
      </NavLink>
    </div>
  );
};

export default SidebarView;
