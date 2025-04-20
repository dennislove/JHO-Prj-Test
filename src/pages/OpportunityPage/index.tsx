import { Dispatch, SetStateAction, useState } from "react";

import "../ContactPage/Contact.scss";
import FillOpportunity from "../../components/Opportunity/FillOpportunity";
import OpportunityTable from "../../components/Opportunity/OpportunityTable";
import OpportunityDash from "../../components/Opportunity/OpportunityDash";

interface OpporPageProps {
  isCreateOpporOpen: boolean;
  setIsCreateOpporOpen: Dispatch<SetStateAction<boolean>>;
}

const OpportunityPage: React.FC<OpporPageProps> = ({
  isCreateOpporOpen,
  setIsCreateOpporOpen,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className={`contact-page ${isCreateOpporOpen ? "blur" : ""}`}>
      <FillOpportunity
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        isCreateOpporOpen={isCreateOpporOpen}
        setIsCreateOpporOpen={setIsCreateOpporOpen}
      />
      <div className="content">
        {activeIndex === 0 ? <OpportunityTable /> : <OpportunityDash />}
      </div>
    </div>
  );
};

export default OpportunityPage;
