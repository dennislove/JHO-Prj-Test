import { useState, Dispatch, SetStateAction } from "react";
import {
  FaSearch,
  FaPen,
  FaChevronDown,
  FaBars,
  FaTrash,
} from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";
import listsData from "../../data/listContacts.json";
import "./ListContact.scss";
import ButtonSolid from "../Button/ButtonSolid";
import AddEtiquette from "./AddEtiquette";
import EditEtiquette from "./EditEtiquette";

interface List {
  id: number;
  name: string;
  contactCount: number;
}

interface ListEtiquettesProps {
  isListEtiquettesOpen: boolean;
  setIsListEtiquettesOpen: Dispatch<SetStateAction<boolean>>;
}

const ListEtiquettes: React.FC<ListEtiquettesProps> = ({
  // isListContactOpen,
  setIsListEtiquettesOpen,
}) => {
  const [lists] = useState<List[]>(listsData);
  const [openTrashId, setOpenTrashId] = useState<number | null>(null);
  const [isAddEtiquetteOpen, setIsAddEtiquetteOpen] = useState<boolean>(false);
  const [isEditEtiquetteOpen, setIsEditEtiquetteOpen] =
    useState<boolean>(false);
  const toggleTrash = (id: number) => {
    setOpenTrashId((prev) => (prev === id ? null : id));
  };

  const handleClose = () => {
    setIsListEtiquettesOpen(false);
  };
  const handeOpenAddEtiquette = () => {
    setIsAddEtiquetteOpen(true);
  };
  const handeOpenEditEtiquette = () => {
    setIsEditEtiquetteOpen(true);
  };
  const handleCloseAddEtiquette = () => {
    setIsAddEtiquetteOpen(false);
  };
  const handleCloseEditEtiquette = () => {
    setIsEditEtiquetteOpen(false);
  };

  const colorClasses = ["blue", "green", "dark-green", "cyan", "yellow", "red"];

  const getRandomColorClass = () => {
    const randomIndex = Math.floor(Math.random() * colorClasses.length);
    return `tag-etiquettes--${colorClasses[randomIndex]}`;
  };
  return (
    <div className="list-contact-overlay">
      <div className="list-box-container">
        <div className="list-box-header">
          <VscChromeClose
            size={24}
            className="closeBox"
            onClick={handleClose}
          />
          <div className="header-left">
            <FaBars className="menu-icon" />
            <h2>Étiquettes</h2>
          </div>
          <div className="header-right">
            <div className="search-bar">
              <FaSearch className="search-icon" size={18} />
              <input type="text" placeholder="Recherche" />
            </div>
            <ButtonSolid
              name="Ajouter une liste"
              onClick={handeOpenAddEtiquette}
            />
          </div>
        </div>

        <div className="list-box-table">
          <div className="table-header">
            <span>Nom de la liste</span>
            <span>Contact</span>
            <span></span>
          </div>
          <div className="table-body">
            {lists.map((list) => (
              <div key={list.id} className="table-row">
                <span className={`tag-etiquettes ${getRandomColorClass()}`}>
                  {list.name}
                </span>
                <span>{list.contactCount}</span>
                <div className="action-cell">
                  <button className="edit-btn" onClick={handeOpenEditEtiquette}>
                    <FaPen className="edit-icon" />
                    Modifier
                  </button>
                  {openTrashId === list.id && (
                    <button className="delete-btn">
                      <FaTrash className="delete-icon" />
                      Delete
                    </button>
                  )}
                  <div
                    className="dropdown"
                    onClick={() => toggleTrash(list.id)}
                  >
                    <FaChevronDown
                      className={`dropdown-icon ${
                        openTrashId === list.id ? "animation" : ""
                      }`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {isAddEtiquetteOpen && <AddEtiquette onClose={handleCloseAddEtiquette} />}
      {isEditEtiquetteOpen && (
        <EditEtiquette onClose={handleCloseEditEtiquette} />
      )}
    </div>
  );
};

export default ListEtiquettes;
