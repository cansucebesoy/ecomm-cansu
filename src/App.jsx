import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import { HomePage } from "./pages/HomePage/HomePage";
import { Shop } from "./pages/Shop/Shop";
import { PageContent } from "./layout/PageContent";
import { ProductDetail } from "./pages/ProductDetail/ProductDetail";
import { ContactPage } from "./pages/ContactPage/ContactPage";
import { TeamPage } from "./pages/TeamPage/TeamPage";
import { AboutUsPage } from "./pages/AboutUsPage/AboutUsPage";

const routes = [
  {
    path: "/shop",
    component: <Shop />,
  },
  {
    path: "/contact",
    component: <ContactPage />,
  },
  {
    path: "/team",
    component: <TeamPage />,
  },
  {
    path: "/about",
    component: <AboutUsPage />,
  },
  {
    path: "/product/:productId",
    component: <ProductDetail />,
  },
  {
    path: "/",
    component: <HomePage />,
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
