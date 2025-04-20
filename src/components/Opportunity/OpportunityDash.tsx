import React from "react";
import {
  FaExclamationTriangle,
  FaChevronRight,
  FaCalendar,
} from "react-icons/fa";
import opportunitiesData from "../../data/opportunities.json";
import "./OpportunityDash.scss";

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
                <div
                  className="dotInHeader"
                  style={{ "--dot-color": column.color } as React.CSSProperties}
                ></div>
                <h3>
                  {column.title} - {totalValueOpps.toLocaleString()}€
                </h3>
                <span
                  className="count"
                  style={
                    {
                      "--oppacy-color": `${column.color}20`,
                      "--dot-color": column.color,
                    } as React.CSSProperties
                  }
                >
                  {column.opportunities.length}
                </span>
              </div>
              <div className="cards">
                {column.opportunities.map((opp, idx) => (
                  <div key={idx} className="card">
                    <div className="card-content">
                      <div className="card-date">
                        <FaCalendar color="red" />
                        {opp.dateClosing}
                      </div>
                      <div className="card-title">{opp.title}</div>
                      <div className="card-subtitle">{opp.subtitle}</div>
                      <div className="card-bottom">
                        <div className="card-info">
                          <img
                            src={opp.avatar}
                            alt={opp.title}
                            className="card-avatar"
                          />
                          <div className="card-value">{opp.value}</div>
                        </div>
                        <div className="card-icons">
                          {opp.warning && (
                            <FaExclamationTriangle className="warning-icon" />
                          )}
                          <FaChevronRight className="arrow-icon" />
                        </div>
                      </div>
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
