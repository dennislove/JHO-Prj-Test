import { FaFilter, FaSearch } from "react-icons/fa";
import "../Contact/FillContact.scss";

import ButtonSolid from "../Button/ButtonSolid";

const FillTask: React.FC = () => {
  return (
    <div className="header">
      <div className="header-left">
        <ButtonSolid name="Ajouter une tâche" />
        <span className="contact-count">50 tâches</span>

        <div className="dropdown-wrapper">
          <h3 className="dropdown-pipeline">Pipeline</h3>
        </div>
      </div>
      <div className="header-right">
        <div className="group">
          <div className="group-dropdown-wrapper">
            <FaFilter className="icon" />
            <select className="group-dropdown">
              <option>Plus de filtre</option>
              <option>Filtre 1</option>
              <option>Filtre 2</option>
            </select>
          </div>
        </div>
        <div className="group">
          <div className="group-dropdown-wrapper">
            <FaFilter className="icon" />
            <select className="group-dropdown">
              <option>Tout le monde</option>
              <option>Filtre 1</option>
              <option>Filtre 2</option>
            </select>
          </div>
        </div>

        <div className="search">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Titre, contact, responsable..."
            className="search-input"
          />
        </div>
      </div>
    </div>
  );
};

export default FillTask;
