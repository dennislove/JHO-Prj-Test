import { FaFilter, FaSearch, FaCog, FaList, FaBook } from "react-icons/fa";
import "../Contact/FillContact.scss";

import { useState } from "react";
import ButtonSolid from "../Button/ButtonSolid";
interface FillOpportunityProps {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}
// interface FillContactProps {
//   isExporterOpen: boolean;

//   setIsExporterOpen: Dispatch<SetStateAction<boolean>>;
// }
const FillOpportunity: React.FC<FillOpportunityProps> = ({
  activeIndex,
  setActiveIndex,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [listContactBox, setListContactBox] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);
  // Hàm mở modal
  const handleShowSetting = () => {
    setIsModalOpen((prev) => !prev);
    setIsButtonActive(true);
  };

  return (
    <div className="header">
      <div className="header-left">
        <ButtonSolid name="Ajout opportunité" />
        <div className="toggle-btn">
          <div
            className={`icon-wrapper ${activeIndex === 0 ? "active-icon" : ""}`}
            onClick={() => setActiveIndex(0)}
          >
            <FaList className="icon" size={18} />
          </div>
          <div
            className={`icon-wrapper ${activeIndex === 1 ? "active-icon" : ""}`}
            onClick={() => setActiveIndex(1)}
          >
            <FaBook className="icon" size={18} />
          </div>
          <div className={`active-toggle move-${activeIndex}`}></div>
        </div>
        <span className="contact-count">100€ • 5 affaires</span>

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
        <button
          className={`settings-btn ${isButtonActive ? "active" : ""}`}
          onClick={handleShowSetting}
        >
          <FaCog className="settings-icon" />
        </button>
      </div>
      {isModalOpen && (
        <div className="modal">
          <h3>Créer / Editer une Liste</h3>
          <h3>Créer / Editer une Etiquette</h3>
          {/* <h3 onClick={() => setIsExporterOpen(true)}>
            Exporter les résultats du filtre...
          </h3> */}
          <h3>Importer des données</h3>
        </div>
      )}
    </div>
  );
};

export default FillOpportunity;
