import { Dispatch, SetStateAction, useState } from "react";

import "./Opportunity.scss";
import FillOpportunity from "../../components/Opportunity/FillOpportunity";
import OpportunityTable from "../../components/Opportunity/OpportunityTable";
import OpportunityDash from "../../components/Opportunity/OpportunityDash";

interface ContactPageProps {
  isListContactOpen: boolean;
  isExporterOpen: boolean;
  isListEtiquettesOpen: boolean;
  setIsListContactOpen: Dispatch<SetStateAction<boolean>>;
  setIsListEtiquettesOpen: Dispatch<SetStateAction<boolean>>;
  setIsExporterOpen: Dispatch<SetStateAction<boolean>>;
}

const OpportunityPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isExporterOpen, setIsExporterOpen] = useState<boolean>(false);
  return (
    <div
    // className={`contact-page ${ isExporterOpen
    //     ? "blur"
    //     : ""
    // }`}
    >
      <FillOpportunity
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <div className="content">
        {activeIndex === 0 ? <OpportunityTable /> : <OpportunityDash />}
      </div>
    </div>
  );
};

export default OpportunityPage;
