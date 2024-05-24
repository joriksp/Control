import React from "react";
import styles from "./AppPage.module.scss";

import Logo from "../../components/ui/Logo";
import { Link, Outlet } from "react-router-dom";

const AppPage = () => {
   return (
      <div className={styles.container}>
         <div className={styles.sidebar}>
            <Logo
               style={{ color: "inherit", fontSize: "18px", padding: "0" }}
            />
            <hr />
            <nav className={styles.navigation}>
               <Link to={"home"}>
                  <i className="fa fa-home" aria-hidden="true"></i>Главная
               </Link>
               <Link to={"deals"}>
                  <i className="fa fa-book" aria-hidden="true"></i>Сделки
               </Link>
               <Link to={"requests"}>
                  <i className="fa fa-paper-plane" aria-hidden="true"></i>Заявки
               </Link>
               <Link to={"contacts"}>
                  <i className="fa fa-phone" aria-hidden="true"></i>Контакты
               </Link>
               <Link to={"profile"}>
                  <i className="fa fa-user" aria-hidden="true"></i>Профиль
               </Link>
            </nav>
         </div>
         <div className={styles.content}>
            <Outlet />
         </div>
      </div>
   );
};

export default AppPage;
