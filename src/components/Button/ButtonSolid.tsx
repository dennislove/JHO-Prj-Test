import { FaPlus } from "react-icons/fa";
import "./index.scss";
interface ButtonSolidProps {
  name: string;
  onClick?: () => void;
}
const ButtonSolid: React.FC<ButtonSolidProps> = ({ name, onClick }) => {
  return (
    <button className="add-contact-btn" onClick={onClick}>
      <FaPlus className="icon" /> {name}
    </button>
  );
};
export default ButtonSolid;
