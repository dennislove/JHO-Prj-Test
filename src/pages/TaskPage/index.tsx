import { Dispatch, SetStateAction } from "react";

import "../ContactPage/Contact.scss";
import FillTask from "../../components/Taks/FillTasks";
import TaskTable from "../../components/Taks/TaskTable";

interface TaskPageProps {
  isCreateOpporOpen: boolean;
  setIsCreateOpporOpen: Dispatch<SetStateAction<boolean>>;
}

const TaskPage: React.FC<TaskPageProps> = () => {
  return (
    <div className={`contact-page `}>
      <FillTask />
      <TaskTable />
    </div>
  );
};

export default TaskPage;
