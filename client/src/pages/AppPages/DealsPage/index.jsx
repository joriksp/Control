import React from "react";
import styles from "./DealsPage.module.scss";

import PageTitle from "../../../components/ui/PageTitle";
import Table from "../../../components/ui/Table";
import Button from "../../../components/ui/Button";

const DealsPage = () => {
   return (
      <>
         <PageTitle>Сделки</PageTitle>
         <p>Ваши сделки.</p>
         <Table
            headers={["№", "Название"]}
            data={[
               ["1", "Сделка первая"],
               ["2", "Сделка вторая"],
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

export default DealsPage;
