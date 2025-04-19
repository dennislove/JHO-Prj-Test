import React from "react";
import { FaExclamationTriangle, FaChevronRight } from "react-icons/fa";
import opportunitiesData from "../../data/opportunities.json";
import "./OpportunityDash.scss";

interface Opportunity {
  title: string;
  subtitle: string;
  value: string;
  warning: boolean;
}

interface Column {
  title: string;
  color: string;
  opportunities: Opportunity[];
}

const OpportunityDash: React.FC = () => {
  const columns: Column[] = opportunitiesData.columns;

  return (
    <div className="opportunity-dash">
      <div className="columns">
        {columns.map((column, index) => {
          // Calculate totalValueOpps for this column
          const totalValueOpps = column.opportunities.reduce((total, opp) => {
            const value = parseFloat(opp.value.replace("€", "")); // Remove € and parse to number
            return total + (isNaN(value) ? 0 : value);
          }, 0);

          return (
            <div key={index} className="column">
              <div className="column-header">
                <div className=""></div>
                <h3>
                  {column.title} - {totalValueOpps.toLocaleString()}€
                </h3>
                <span className="count">{column.opportunities.length}</span>
              </div>
              <div className="cards">
                {column.opportunities.map((opp, idx) => (
                  <div key={idx} className="card">
                    <div className="card-content">
                      <div className="card-title">{opp.title}</div>
                      <div className="card-subtitle">{opp.subtitle}</div>
                      <div className="card-value">{opp.value}</div>
                    </div>
                    <div className="card-icons">
                      {opp.warning && (
                        <FaExclamationTriangle className="warning-icon" />
                      )}
                      <FaChevronRight className="arrow-icon" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OpportunityDash;
