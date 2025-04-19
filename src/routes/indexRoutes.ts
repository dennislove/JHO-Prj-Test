import AuthForm from "../components/Auth/LoginForm";
import ContactPage from "../pages/ContactPage";
import OpportunityPage from "../pages/OpportunityPage";

const routes = [
  {
    path: "/contacts",
    element: ContactPage,
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
    path: "/login",
    element: AuthForm,
    isShowHeader: false,
    isPrivate: false,
  },
];

export default routes;
