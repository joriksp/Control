import React from "react";
import styles from "./ContactsPage.module.scss";

import PageTitle from "../../../components/ui/PageTitle";
import Table from "../../../components/ui/Table";
import Button from "../../../components/ui/Button";
import { Link } from "react-router-dom";

const ContactsPage = () => {
   return (
      <>
         <PageTitle>Контакты</PageTitle>
         <p>Ваши контакты.</p>
         <Table
            headers={["Способ связи", "Контакт"]}
            data={[
               ["Телефон", "9 209 123 912 23"],
               ["Почта", "example@gmail.com"],
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

export default ContactsPage;
