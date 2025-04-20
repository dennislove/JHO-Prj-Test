import { FaPlus } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";

import "./AddList.scss";
import InputComponent from "../InputComponent";
import { ReactNode, useState } from "react";

interface SubFormProps {
  onClose: () => void;
  name: string;
  icon?: ReactNode;
  showColor?: boolean;
  addListBox?: boolean;
  showClearIcon?: boolean;
  nameTag: string;
  namePlaceholder: string;
}

const SubForm: React.FC<SubFormProps> = ({
  onClose,
  name = "",
  icon,
  showColor = true,
  addListBox = true,
  showClearIcon = true,
  nameTag,
  namePlaceholder,
}) => {
  const [inputList, setInputList] = useState<string[]>([""]);
  const handleClose = () => {
    onClose();
  };
  const addInputList = () => {
    setInputList([...inputList, ""]);
  };

  const removeInputList = (index: number) => {
    if (inputList.length > 1) {
      const newList = inputList.filter((_, i) => i !== index);
      setInputList(newList);
    }
  };

  return (
    <div className="add-list">
      <div className="add-list-container ">
        <div className="wrap-content-box">
          <div className="add-list-header">
            <VscChromeClose
              size={24}
              className="closeBox"
              onClick={handleClose}
            />
            <div className="header-left">
              <div className="menu-icon">{icon}</div>

              <h2>{name}</h2>
            </div>
          </div>
          {/* input default */}
          {inputList.map((_, index) => (
            <InputComponent
              showColor={showColor}
              key={index}
              showClearIcon={index === 0 ? showClearIcon : true}
              onClick={() => removeInputList(index)}
              className="export-name-input"
              placeholder={namePlaceholder}
            />
          ))}
          {addListBox && (
            <div className={`add-new-list`}>
              <div className="input-wrapper" onClick={addInputList}>
                <h3>{nameTag}</h3>
                <FaPlus />
              </div>
            </div>
          )}
        </div>
        <div className="list-box-footer">
          <div className="cancel-btn" onClick={handleClose}>
            Annuler
          </div>
          <div className="export-btn">Sauvegarder</div>
        </div>
      </div>
    </div>
  );
};

export default SubForm;
