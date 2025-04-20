import { FaBars } from "react-icons/fa";

import "./AddList.scss";

import SubForm from "./SubForm";

interface EditEtiquetteProps {
  onClose: () => void;
}

const EditEtiquette: React.FC<EditEtiquetteProps> = ({ onClose }) => {
  const handleClose = () => {
    onClose();
  };
  return (
    <div>
      <SubForm
        name="Modifier liste"
        icon={<FaBars />}
        showColor={true}
        onClose={() => handleClose()}
        addListBox={false}
        nameTag="Ajouter une étiquette"
        namePlaceholder="Votre étiquette"
      />
    </div>
  );
};

export default EditEtiquette;
