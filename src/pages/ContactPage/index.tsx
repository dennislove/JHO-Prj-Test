import { Dispatch, SetStateAction } from "react";
import ContactTable from "../../components/Contact/ContactTable";
import FillContact from "../../components/Contact/FillContact";
import "./Contact.scss";

interface ContactPageProps {
  isListContactOpen: boolean;
  isExporterOpen: boolean;
  isListEtiquettesOpen: boolean;
  setIsListContactOpen: Dispatch<SetStateAction<boolean>>;
  setIsListEtiquettesOpen: Dispatch<SetStateAction<boolean>>;
  setIsExporterOpen: Dispatch<SetStateAction<boolean>>;
}

const ContactPage: React.FC<ContactPageProps> = ({
  isListContactOpen,
  isListEtiquettesOpen,
  isExporterOpen,
  setIsListContactOpen,
  setIsListEtiquettesOpen,
  setIsExporterOpen,
}) => {
  return (
    <div
      className={`contact-page ${
        isListContactOpen || isExporterOpen || isListEtiquettesOpen
          ? "blur"
          : ""
      }`}
    >
      <FillContact
        isListContactOpen={isListContactOpen}
        isListEtiquettesOpen={isListEtiquettesOpen}
        isExporterOpen={isExporterOpen}
        setIsListContactOpen={setIsListContactOpen}
        setIsListEtiquettesOpen={setIsListEtiquettesOpen}
        setIsExporterOpen={setIsExporterOpen}
      />
      <ContactTable />
    </div>
  );
};

export default ContactPage;
