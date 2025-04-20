import { FaTag } from "react-icons/fa";

import "./AddList.scss";

import SubForm from "./SubForm";

interface AddEtiquetteProps {
  onClose: () => void;
}

const AddEtiquette: React.FC<AddEtiquetteProps> = ({ onClose }) => {
  const handleClose = () => {
    onClose();
  };
  return (
    <div>
      <SubForm
        name="Ajouter étiquette"
        icon={<FaTag />}
        showColor={true}
        showClearIcon={false}
        onClose={() => handleClose()}
        nameTag="Ajouter une étiquette"
        namePlaceholder="Votre étiquette"
      />
    </div>
  );
};

export default AddEtiquette;
