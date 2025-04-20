import {
  FaFilter,
  FaSearch,
  FaList,
  FaBook,
  FaAngleDown,
  FaInfo,
} from "react-icons/fa";
import "../Contact/FillContact.scss";

import { Dispatch, SetStateAction } from "react";
import ButtonSolid from "../Button/ButtonSolid";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
interface FillOpportunityProps {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  isCreateOpporOpen: boolean;
  setIsCreateOpporOpen: Dispatch<SetStateAction<boolean>>;
}

const FillOpportunity: React.FC<FillOpportunityProps> = ({
  activeIndex,
  setActiveIndex,
  setIsCreateOpporOpen,
}) => {
  return (
    <div>
      {activeIndex === 2 ? (
        <div className="header">
          <div className="dropdown-wrapper">
            <h3>Nom du Pipeline</h3>
            <div className="pipline-btn" onClick={() => setActiveIndex(1)}>
              Pipeline
            </div>
          </div>
          <div className="header-center">
            <ToggleSwitch />
            <h3>Probabilités de succès de l’affaire </h3>
            <FaInfo size={12} />
          </div>
          <div className="header-left">
            <h3>Annuler</h3>
            <ButtonSolid name="Enregistrer" />
          </div>
        </div>
      ) : (
        <div className="header">
          <div className="header-left">
            <ButtonSolid
              name="Ajout opportunité"
              onClick={() => setIsCreateOpporOpen(true)}
            />

            <div className="toggle-btn">
              <div
                className={`icon-wrapper ${
                  activeIndex === 0 ? "active-icon" : ""
                }`}
                onClick={() => setActiveIndex(0)}
              >
                <FaList className="icon" size={18} />
              </div>
              <div
                className={`icon-wrapper ${
                  activeIndex === 1 ? "active-icon" : ""
                }`}
                onClick={() => setActiveIndex(1)}
              >
                <FaBook className="icon" size={18} />
              </div>
              <div className={`active-toggle move-${activeIndex}`}></div>
            </div>
            <span className="contact-count">100€ • 5 affaires</span>
            <div className="dropdown-wrapper">
              <select
                name="pipeline"
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === "Non traité") {
                    setActiveIndex(2);
                  } else if (value === "Pipeline") {
                    setActiveIndex(1); // hoặc activeIndex bạn muốn
                  }
                }}
              >
                <option value="Pipeline">Pipeline</option>
                <option value="Non traité">Non traité</option>
              </select>

              <span className="pipeline-angle">
                <FaAngleDown />
              </span>
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
      )}
    </div>
  );
};

export default FillOpportunity;
