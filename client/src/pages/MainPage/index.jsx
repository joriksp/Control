import React from "react";
import Logo from "../../components/ui/Logo";
import "./MainPage.css";
import { Navigate, useNavigate } from "react-router-dom";

const MainPage = () => {
   const navigate = useNavigate();
   const token = localStorage.getItem("token");

   if (!!token) {
      return <Navigate to={"/app"} />;
   }

   return (
      <div className="intro-block">
         <Logo onClick={() => navigate("/login")} />
         <p className="intro-text">
            Нажмите на логотип для продолжения работы с WEB-приложением.
         </p>
      </div>
   );
};

export default MainPage;
