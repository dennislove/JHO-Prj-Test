import React, { useState } from "react";
import Header from "../Header";

import "./index.scss";

import HeaderView from "./HeaderView";
import SidebarView from "./SidebarView";
import ListContact from "../Contact/ListContact";
import ListEtiquettes from "../Contact/ListEtiquettes";
import Exporter from "../Contact/Exporter";
import CreateOppor from "../Opportunity/CreateOppor";
import EditTask from "../Taks/EditTask";
interface ChildProps {
  isListContactOpen: boolean;
  isListEtiquettesOpen: boolean;
  isExporterOpen: boolean;
  isCreateOpporOpen: boolean;
  isEditTaskOpen: boolean;
  setIsEditTaskOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsListContactOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsListEtiquettesOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsExporterOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCreateOpporOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const DefaultComponent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isListContactOpen, setIsListContactOpen] = useState(false);
  const [isListEtiquettesOpen, setIsListEtiquettesOpen] = useState(false);
  const [isExporterOpen, setIsExporterOpen] = useState(false);
  const [isCreateOpporOpen, setIsCreateOpporOpen] = useState(false);
  const [isEditTaskOpen, setIsEditTaskOpen] = useState(false);

  return (
    <div
      className={`layout ${
        isListContactOpen ||
        isListEtiquettesOpen ||
        isExporterOpen ||
        isCreateOpporOpen ||
        isEditTaskOpen
          ? "blur"
          : ""
      }`}
    >
      <div className="main-content">
        <SidebarView />

        {/* Main content */}

        <div className="content-children">
          <Header />
          <HeaderView />
          <div className="body-content-children">
            {React.Children.map(children, (child) =>
              React.isValidElement(child)
                ? React.cloneElement(child as React.ReactElement<ChildProps>, {
                    isListContactOpen,
                    isListEtiquettesOpen,
                    isExporterOpen,
                    isCreateOpporOpen,
                    isEditTaskOpen,
                    setIsEditTaskOpen,
                    setIsListContactOpen,
                    setIsListEtiquettesOpen,
                    setIsExporterOpen,
                    setIsCreateOpporOpen,
                  })
                : child
            )}
          </div>
        </div>
      </div>
      {isListContactOpen && (
        <ListContact
          isListContactOpen={isListContactOpen}
          setIsListContactOpen={setIsListContactOpen}
        />
      )}
      {isListEtiquettesOpen && (
        <ListEtiquettes
          isListEtiquettesOpen={isListEtiquettesOpen}
          setIsListEtiquettesOpen={setIsListEtiquettesOpen}
        />
      )}
      {isExporterOpen && (
        <Exporter
          isExporterOpen={isExporterOpen}
          setIsExporterOpen={setIsExporterOpen}
        />
      )}
      {isCreateOpporOpen && (
        <CreateOppor
          isCreateOpporOpen={isCreateOpporOpen}
          setIsCreateOpporOpen={setIsCreateOpporOpen}
        />
      )}
      {isEditTaskOpen && (
        <EditTask
          isEditTaskOpen={isEditTaskOpen}
          setIsEditTaskOpen={setIsEditTaskOpen}
        />
      )}
      {/* Footer */}
    </div>
  );
};

export default DefaultComponent;
