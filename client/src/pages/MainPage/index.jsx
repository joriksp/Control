import React from "react";
import Logo from "../../components/ui/Logo";
import "./MainPage.css";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
   const navigate = useNavigate();

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
