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
import AddList from "./AddList";
import EditList from "./EditList";

interface List {
  id: number;
  name: string;
  contactCount: number;
}

interface ListContactProps {
  isListContactOpen: boolean;
  setIsListContactOpen: Dispatch<SetStateAction<boolean>>;
}

const ListContact: React.FC<ListContactProps> = ({
  // isListContactOpen,
  setIsListContactOpen,
}) => {
  const [lists] = useState<List[]>(listsData);
  const [openTrashId, setOpenTrashId] = useState<number | null>(null);
  const [isAddListOpen, setIsAddListOpen] = useState<boolean>(false);
  const [isEditListOpen, setIsEditListOpen] = useState<boolean>(false);
  const toggleTrash = (id: number) => {
    setOpenTrashId((prev) => (prev === id ? null : id));
  };

  const handleClose = () => {
    setIsListContactOpen(false);
  };
  const handeOpenAddList = () => {
    setIsAddListOpen(true);
  };
  const handeOpenEditList = () => {
    setIsEditListOpen(true);
  };
  const handleCloseAddList = () => {
    setIsAddListOpen(false);
  };
  const handleCloseEditList = () => {
    setIsEditListOpen(false);
  };
  return (
    <div className="list-contact-overlay">
      <div className={`${isAddListOpen ? "blur" : ""} list-box-container`}>
        <div className="list-box-header">
          <VscChromeClose
            size={24}
            className="closeBox"
            onClick={handleClose}
          />
          <div className="header-left">
            <FaBars className="menu-icon" />
            <h2>Liste de contact</h2>
          </div>
          <div className="header-right">
            <div className="search-bar">
              <FaSearch className="search-icon" size={18} />
              <input type="text" placeholder="Recherche" />
            </div>
            <ButtonSolid name="Ajouter une liste" onClick={handeOpenAddList} />
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
                <span>{list.name}</span>
                <span>{list.contactCount}</span>
                <div className="action-cell">
                  <button className="edit-btn" onClick={handeOpenEditList}>
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
      {isAddListOpen && <AddList onClose={handleCloseAddList} />}
      {isEditListOpen && <EditList onClose={handleCloseEditList} />}
    </div>
  );
};

export default ListContact;
