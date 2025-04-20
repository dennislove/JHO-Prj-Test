import { FaBars } from "react-icons/fa";

import "./AddList.scss";

import SubForm from "./SubForm";

interface EditListProps {
  onClose: () => void;
}

const EditList: React.FC<EditListProps> = ({ onClose }) => {
  const handleClose = () => {
    onClose();
  };
  return (
    <div>
      <SubForm
        name="Modifier liste"
        icon={<FaBars />}
        showColor={false}
        onClose={() => handleClose()}
        addListBox={false}
        nameTag="Ajouter une liste"
        namePlaceholder="Votre liste"
      />
    </div>
  );
};

export default EditList;
