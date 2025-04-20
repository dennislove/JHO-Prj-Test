import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import routes from "./routes/indexRoutes";
import DefaultComponent from "./components/DefaultComponent";
import firebaseConfig from "./firebaseConfig";
import PrivateRoute from "./routes/PrivateRoute";
import { initializeApp } from "firebase/app";
import "./styles/global.scss";
import "./styles/var.scss";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

interface AppRoute {
  path: string;
  element: React.ComponentType;
  isShowHeader: boolean;
  isPrivate?: boolean;
}
function App() {
  return (
    <Router>
      <Routes>
        {(routes as AppRoute[]).map((route) => {
          const Page = route.element;

          const pageContent = route.isShowHeader ? (
            <DefaultComponent>
              <Page />
            </DefaultComponent>
          ) : (
            <Page />
          );

          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                route.isPrivate ? (
                  <PrivateRoute>{pageContent}</PrivateRoute>
                ) : (
                  pageContent
                )
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}
// eslint-disable-next-line react-refresh/only-export-components
export { auth, provider, signInWithPopup };

export default App;
