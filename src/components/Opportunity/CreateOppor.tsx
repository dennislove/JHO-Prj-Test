import React, { Dispatch, SetStateAction, useState } from "react";
import "./CreateOppor.scss";
import { VscChromeClose } from "react-icons/vsc";
import { FaAngleDown } from "react-icons/fa";

interface CreateOpporProps {
  isCreateOpporOpen: boolean;
  setIsCreateOpporOpen: Dispatch<SetStateAction<boolean>>;
}

const CreateOppor: React.FC<CreateOpporProps> = ({
  isCreateOpporOpen,
  setIsCreateOpporOpen,
}) => {
  const [formData, setFormData] = useState({
    transactionName: "",
    contact: "1500€",
    organisation: "1500€",
    pipeline: "Non traité",
    montant: "1500€",
    dateFermeture: "29/06/2023",
    time: "12:30",
    telephone: "+33 6 88 25 26 87",
    email: "romain@gilly.studio",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleClose = () => {
    setIsCreateOpporOpen(false);
  };

  const colorMap: { [key: string]: string } = {
    "Non traité": "#f64b59",
    "En cours": "#85690b",
    "En négociation": "#1d612d",
  };
  return (
    <div className="list-contact-overlay">
      <div className={`list-box-container ${isCreateOpporOpen ? "open" : ""}`}>
        <div className="modal-header">
          <h2>Create new opportunity</h2>
          <VscChromeClose className={`closeBox `} onClick={handleClose} />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nom de la transaction</label>
            <input
              type="text"
              name="transactionName"
              value={formData.transactionName}
              onChange={handleChange}
              placeholder="Nom de la transaction"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Contact</label>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Organisation</label>
              <input
                type="text"
                name="organisation"
                value={formData.organisation}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Choix du pipeline</label>
              <div className="select-wrapper">
                <select
                  name="pipeline"
                  value={formData.pipeline}
                  onChange={handleChange}
                >
                  <option value="Pipeline">Pipeline</option>
                  <option value="Non traité">Non traité</option>
                </select>
                <span className="pipeline-dot"></span>
                <span className="pipeline-angle">
                  <FaAngleDown />
                </span>
              </div>
            </div>
            <div className="form-group">
              <label>Choix du pipeline</label>
              <div className="select-wrapper">
                <select
                  name="pipeline"
                  className="select-special"
                  value={formData.pipeline}
                  onChange={handleChange}
                  style={{
                    backgroundColor: colorMap[formData.pipeline] || "#ffe50020",
                  }}
                >
                  <option value="Non traité">Non traité</option>

                  <option value="En cours">En cours</option>
                  <option value="En négociation">En négociation</option>
                </select>
                <span className="pipeline-dot"></span>
                <span className="pipeline-angle">
                  <FaAngleDown />
                </span>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label>Montant</label>
            <input
              type="text"
              name="montant"
              value={formData.montant}
              onChange={handleChange}
            />
          </div>
          <div className="form-row row-special">
            <div className="form-group group-special">
              <label>Date de fermeture</label>
              <input
                type="text"
                name="dateFermeture"
                value={formData.dateFermeture}
                onChange={handleChange}
              />
            </div>
            <div className="form-group group-special-2">
              <label>&nbsp;</label>
              <input
                type="text"
                name="time"
                value={formData.time}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Téléphone</label>
              <input
                type="text"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>E-mail</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="cancel-btn" onClick={handleClose}>
              Annuler
            </button>
            <button type="submit" className="submit-btn">
              Créer la transaction
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateOppor;
