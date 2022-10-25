import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/home";
import { Login } from "../pages/login/login";
import { LoggedinNavbar } from "../shared/login-navbar/loggedInNavbar";

export const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <>
              <LoggedinNavbar />
              <Home />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
