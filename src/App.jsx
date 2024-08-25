import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import { HomePage } from "./pages/HomePage/HomePage";
import { Shop } from "./pages/Shop/Shop";
import { PageContent } from "./layout/PageContent";

const routes = [
  {
    path: "/",
    component: <HomePage />,
  },
  {
    path: "/shop",
    component: <Shop />,
  },
];

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route) => (
          <Route path={route.path}>
            <PageContent>{route.component}</PageContent>
          </Route>
        ))}
      </Switch>
    </Router>
  );
}

export default App;
