import { NavLink, useLocation } from "react-router-dom";
import {
  FaBars,
  FaCalendarAlt,
  FaCalendarCheck,
  FaCog,
  FaTag,
} from "react-icons/fa";
import "./index.scss";
import { FaDollarSign } from "react-icons/fa6";
const HeaderView: React.FC = () => {
  const location = useLocation().pathname;
  const isOpportunites = location === "/opportunites";
  return (
    <div className="topView">
      <div className="headerView">
        <NavLink
          to="/contacts"
          className={({ isActive }: { isActive: boolean }) =>
            `tag-path ${isActive ? "active" : ""}`
          }
        >
          <FaCalendarAlt className="icon" size={18} />
          <h3>Contacts</h3>
        </NavLink>
        <NavLink
          to={isOpportunites ? "/etiquettes" : "/listes"}
          className={({ isActive }: { isActive: boolean }) =>
            `tag-path ${isActive ? "active" : ""}`
          }
        >
          {isOpportunites ? (
            <>
              <FaTag className="icon" />
              <h3>Étiquettes</h3>
            </>
          ) : (
            <>
              <FaBars className="icon" />
              <h3>Listes</h3>
            </>
          )}
        </NavLink>

        <NavLink
          to="/opportunites"
          className={({ isActive }: { isActive: boolean }) =>
            `tag-path ${isActive ? "active" : ""}`
          }
        >
          <FaDollarSign className="icon" />
          <h3>Opportunités</h3>
        </NavLink>
        <NavLink
          to="/tasks"
          className={({ isActive }: { isActive: boolean }) =>
            `tag-path ${isActive ? "active" : ""}`
          }
        >
          <FaCalendarCheck className="icon" />
          <h3>Tâches</h3>
        </NavLink>
      </div>

      {location !== "/contacts" && (
        <div className="header-setting">
          <FaCog />
          <h3>Paramètre</h3>
        </div>
      )}
    </div>
  );
};

export default HeaderView;
