import AuthForm from "../components/Auth/LoginForm";
import ContactPage from "../pages/ContactPage";
import OpportunityPage from "../pages/OpportunityPage";
import TaskPage from "../pages/TaskPage";

const routes = [
  {
    path: "/contacts",
    element: ContactPage,
    isShowHeader: true,
    isPrivate: true,
  },
  {
    path: "/tasks",
    element: TaskPage,
    isShowHeader: true,
    isPrivate: true,
  },
  {
    path: "/opportunites",
    element: OpportunityPage,
    isShowHeader: true,
    isPrivate: true,
  },
  {
    path: "/",
    element: AuthForm,
    isShowHeader: false,
    isPrivate: false,
  },
];

export default routes;
