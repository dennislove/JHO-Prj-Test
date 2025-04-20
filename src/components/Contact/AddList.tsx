import { FaBars } from "react-icons/fa";

import "./AddList.scss";

import SubForm from "./SubForm";

interface AddListProps {
  onClose: () => void;
}

const AddList: React.FC<AddListProps> = ({ onClose }) => {
  const handleClose = () => {
    onClose();
  };
  return (
    <div>
      <SubForm
        name="Ajouter liste"
        icon={<FaBars />}
        showColor={false}
        showClearIcon={false}
        onClose={() => handleClose()}
        nameTag="Ajouter une liste"
        namePlaceholder="Votre liste"
      />
    </div>
  );
};

export default AddList;
