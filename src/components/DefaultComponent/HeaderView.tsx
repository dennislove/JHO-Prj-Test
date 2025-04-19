import { NavLink, useLocation } from "react-router-dom";
import { FaCog, FaUser } from "react-icons/fa";
import "./index.scss";
const HeaderView: React.FC = () => {
  const location = useLocation();
  return (
    <div className="topView">
      <div className="headerView">
        <NavLink
          to="/contacts"
          className={({ isActive }: { isActive: boolean }) =>
            `tag-path ${isActive ? "active" : ""}`
          }
        >
          <FaUser className="icon" size={18} />
          <h3>Contacts</h3>
        </NavLink>
        <NavLink
          to="/etiquettes"
          className={({ isActive }: { isActive: boolean }) =>
            `tag-path ${isActive ? "active" : ""}`
          }
        >
          <FaUser className="icon" />
          <h3>Étiquettes</h3>
        </NavLink>
        <NavLink
          to="/opportunites"
          className={({ isActive }: { isActive: boolean }) =>
            `tag-path ${isActive ? "active" : ""}`
          }
        >
          <FaUser className="icon" />
          <h3>Opportunités</h3>
        </NavLink>
        <NavLink
          to="/taches"
          className={({ isActive }: { isActive: boolean }) =>
            `tag-path ${isActive ? "active" : ""}`
          }
        >
          <FaUser className="icon" />
          <h3>Tâches</h3>
        </NavLink>
      </div>

      {location.pathname !== "/contacts" && (
        <div className="header-setting">
          <FaCog />
          <h3>Paramètre</h3>
        </div>
      )}
    </div>
  );
};

export default HeaderView;
