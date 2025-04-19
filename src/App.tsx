import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import routes from "./routes/indexRoutes";
import DefaultComponent from "./components/DefaultComponent";

import "./styles/global.scss";
import "./styles/var.scss";
import PrivateRoute from "./routes/PrivateRoute";

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

export default App;
