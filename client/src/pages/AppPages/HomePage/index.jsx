import React from "react";
import styles from "./HomePage.module.scss";
import PageTitle from "../../../components/ui/PageTitle";

const HomePage = () => {
   return (
      <>
         <PageTitle>Домашняя страница</PageTitle>
         <p>
            Добро пожаловать в WEB-приложение "СONTROL", которое имеет схожесть
            с CRM-системами, только без внедрения бизнес процессов и аналитики.
            Оно поможет контролиоровать вашу работу.
         </p>
      </>
   );
};

export default HomePage;
