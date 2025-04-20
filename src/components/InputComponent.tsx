import { useState, ChangeEvent } from "react";
import { FaTrash } from "react-icons/fa";
import "./Contact/AddList.scss";
interface InputComponentProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  showClearIcon?: boolean;
  showColor?: boolean;
  id?: string;
  className?: string;
  onClear?: () => void;
  onClick?: () => void;
}

const InputComponent: React.FC<InputComponentProps> = ({
  placeholder = "Enter export name",
  value: controlledValue,
  onChange,
  showClearIcon = true,
  showColor = true,
  id = "export-name",
  className = "",
  onClick,
}) => {
  const [internalValue, setInternalValue] = useState<string>("");
  const isControlled = controlledValue !== undefined && onChange !== undefined;
  const value = isControlled ? controlledValue : internalValue;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (isControlled) {
      onChange(newValue);
    } else {
      setInternalValue(newValue);
    }
  };

  return (
    <div className={`section ${className}`}>
      <div className="input-wrapper">
        <div className="left-input">
          {showColor && <div className="square-color"></div>}

          <input
            type="text"
            id={id}
            placeholder={placeholder}
            value={value}
            className="input-text"
            onChange={handleChange}
            aria-describedby="export-name-desc"
          />
        </div>
        {showClearIcon && <FaTrash size={16} onClick={onClick} />}
      </div>
    </div>
  );
};

export default InputComponent;
