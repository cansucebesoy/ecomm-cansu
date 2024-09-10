import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import { HomePage } from "./pages/HomePage/HomePage";
import { Shop } from "./pages/Shop/Shop";
import { PageContent } from "./layout/PageContent";
import { ProductDetail } from "./pages/ProductDetail/ProductDetail";
import { ContactPage } from "./pages/ContactPage/ContactPage";
import { TeamPage } from "./pages/TeamPage/TeamPage";
import { AboutUsPage } from "./pages/AboutUsPage/AboutUsPage";
import { SignUpPage } from "./pages/SignUpPage/SignUpPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { apiClient } from "@/services/apiClient";
import { setUser } from "./store/ClientSlice/ClientSlice";
import { logoutUser } from "./store/thunks/logoutThunk";

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
    path: "/signup",
    component: <SignUpPage />,
  },
  {
    path: "/login",
    component: <LoginPage />,
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

// , {
//   headers: { Authorization: token },
// }
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          // Token'ı elle Authorization başlığına ekliyoruz
          const response = await apiClient.get("/verify");
          if (response.data) {
            dispatch(setUser(response.data));
            localStorage.setItem("token", response.data.token);
          }
        } catch (error) {
          localStorage.removeItem("token");
          dispatch(logoutUser());
        }
      } else {
        dispatch(logoutUser());
      }
    };
    verifyToken();
  }, []);

  // const verifyToken = async () => {
  //   try {
  //     const response = await apiClient.get('/verify'); // /verify endpoint'ine GET isteği gönder
  //     const user = response.data.user; // Kullanıcı bilgilerini al
  //     dispatch(setUser(user)); // Redux store'una kullanıcı bilgilerini ekle
  //   } catch (error) {
  //     // Hata durumunda (örneğin, token geçersizse) kullanıcıyı çıkış yapmaya yönlendirin
  //     console.error('Token doğrulama hatası:', error);
  //   }
  // };

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
