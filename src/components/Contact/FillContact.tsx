import { FaFilter, FaSearch, FaCog } from "react-icons/fa";
import "./FillContact.scss";

import { Dispatch, SetStateAction, useState } from "react";
import ButtonSolid from "../Button/ButtonSolid";

interface FillContactProps {
  isListContactOpen: boolean;
  isExporterOpen: boolean;
  isListEtiquettesOpen: boolean;
  setIsListContactOpen: Dispatch<SetStateAction<boolean>>;
  setIsListEtiquettesOpen: Dispatch<SetStateAction<boolean>>;
  setIsExporterOpen: Dispatch<SetStateAction<boolean>>;
}
const FillContact: React.FC<FillContactProps> = ({
  // isListContactOpen,
  setIsListContactOpen,
  setIsListEtiquettesOpen,
  setIsExporterOpen,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [listContactBox, setListContactBox] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);
  // Hàm mở modal
  const handleShowSetting = () => {
    setIsModalOpen((prev) => !prev);
    setIsButtonActive(true);
  };
  // const openListContact = () => {
  //   setListContactBox((prev) => !prev);
  // };
  return (
    <div className="header">
      <div className="header-left">
        <ButtonSolid name="Ajout de contact" />
        <span className="contact-count">100 Contacts</span>
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
          <h3 onClick={() => setIsListContactOpen(true)}>
            Créer / Editer une Liste
          </h3>
          <h3 onClick={() => setIsListEtiquettesOpen(true)}>
            Créer / Editer une Etiquette
          </h3>
          <h3 onClick={() => setIsExporterOpen(true)}>
            Exporter les résultats du filtre...
          </h3>
          <h3>Importer des données</h3>
        </div>
      )}
    </div>
  );
};

export default FillContact;
