import React, { useState } from "react";
import { FaBraille, FaInfo } from "react-icons/fa";
import opportunitiesData from "../../data/opportunities.json";
import "./OpportunityDash.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

interface Opportunity {
  title: string;
  subtitle: string;
  value: string;
  avatar: string;
  warning: boolean;
  dateClosing: string;
}

interface Column {
  title: string;
  color: string;
  opportunities: Opportunity[];
}

const ItemNonTraite = ({ name }: { name: string }) => {
  return (
    <div className="wrap-item">
      <div className="item-header">
        <h4>{name}</h4>
        <FaInfo size={12} />
      </div>
      <div className="text-input-item">Non traité</div>
    </div>
  );
};
const NonTraiteTable: React.FC = () => {
  const columns: Column[] = opportunitiesData.columns;
  const [toggle, setToggle] = useState(false);
  return (
    <div className="opportunity-dash">
      <div className="columns">
        {columns.map((column, index) => {
          // Calculate totalValueOpps for this column

          return (
            <div key={index} className="column">
              <div className="column-header">
                <h3>{column.title}</h3>
                <FaBraille />
              </div>
              <div className="cards">
                <ItemNonTraite name="Nom" />
                <ItemNonTraite name="Probabilité" />
                <div className="toggle-text">
                  <ToggleSwitch
                    isOn={toggle}
                    onToggle={() => setToggle(!toggle)}
                  />
                  <h4>Périmée dans (jours)</h4>
                  <FaInfo size={12} />
                </div>
                {toggle && <div className="text-input-item">20</div>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NonTraiteTable;
