import React from "react";
import styles from "./ApplicationsPage.module.scss";

import PageTitle from "../../../components/ui/PageTitle";
import Table from "../../../components/ui/Table";
import Button from "../../../components/ui/Button";
import { Link } from "react-router-dom";

const ApplicationsPage = () => {
   return (
      <>
         <PageTitle>Заявки</PageTitle>
         <p>Ваши заявки.</p>
         <Table
            headers={["ФИО", "Название", ""]}
            data={[
               ["Поникаров Илья Евгеньевич", "Заявка", <Link>Просмотр</Link>],
               ["", "", <Link>Просмотр</Link>],
            ]}
         />
         <Button
            style={{
               margin: "0 auto",
               marginTop: "auto",
               width: "fit-content",
            }}
         >
            Новая сделка
         </Button>
      </>
   );
};

export default ApplicationsPage;
