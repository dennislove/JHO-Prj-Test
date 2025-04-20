import React, { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import { VscChromeClose } from "react-icons/vsc";
import "./Exporter.scss";

interface ExporterProps {
  isExporterOpen: boolean;
  setIsExporterOpen: Dispatch<SetStateAction<boolean>>;
}

const Exporter: React.FC<ExporterProps> = ({ setIsExporterOpen }) => {
  const [exportFormat, setExportFormat] = useState<"xlsx" | "csv">("xlsx");
  const [exportName, setExportName] = useState<string>("");
  const [selectedFields, setSelectedFields] = useState({
    defaultFields: false,
    otherFields: false,
    tag: false,
    list: false,
    customFields: false,
    accounts: false,
    score: false,
  });

  const handleClose = () => {
    setIsExporterOpen(false);
  };

  const handleFieldChange = (field: keyof typeof selectedFields) => {
    setSelectedFields((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleExport = () => {
    // Implement export logic here (e.g., API call or file download)
    console.log("Exporting with:", {
      exportFormat,
      exportName,
      selectedFields,
    });
    setIsExporterOpen(false);
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
            <h2>Exporter les résultats</h2>
          </div>
        </div>

        <div className="list-box-content">
          {/* Export Format Section */}
          <div className="section">
            <h3>Choisir un format pour l'exportation</h3>
            <label className="radio-label">
              <input
                type="radio"
                name="export-format"
                value="xlsx"
                checked={exportFormat === "xlsx"}
                onChange={() => setExportFormat("xlsx")}
              />
              XLSX (Excel)
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="export-format"
                value="csv"
                checked={exportFormat === "csv"}
                onChange={() => setExportFormat("csv")}
              />
              CSV (valeurs séparées par des virgules)
            </label>
            <p className="info-text">Tous les 88 éléments seront exportés.</p>
          </div>

          {/* Export Name Section */}

          <div className="section">
            <h3>Nom de l'exportation (facultatif)</h3>
            <input
              type="text"
              placeholder="Nom de l'exportation (il s'agit du nom du fichier exporté)"
              value={exportName}
              onChange={(e) => setExportName(e.target.value)}
              className="export-name-input"
            />
          </div>

          {/* Fields Selection Section */}
          <div className="section">
            <h3>Sélectionnez les fichiers à exporter</h3>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={selectedFields.defaultFields}
                onChange={() => handleFieldChange("defaultFields")}
              />
              Champs par défaut
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={selectedFields.otherFields}
                onChange={() => handleFieldChange("otherFields")}
              />
              Autres champs
            </label>
            <div className="children-autres">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={selectedFields.tag}
                  onChange={() => handleFieldChange("tag")}
                />
                Étiquette
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={selectedFields.list}
                  onChange={() => handleFieldChange("list")}
                />
                Liste
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={selectedFields.customFields}
                  onChange={() => handleFieldChange("customFields")}
                />
                Champs personnalisés
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={selectedFields.accounts}
                  onChange={() => handleFieldChange("accounts")}
                />
                Comptes
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={selectedFields.score}
                  onChange={() => handleFieldChange("score")}
                />
                Score
              </label>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="list-box-footer">
          <div className="cancel-btn" onClick={handleClose}>
            Annuler
          </div>
          <div className="export-btn" onClick={handleExport}>
            Exportation
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exporter;
