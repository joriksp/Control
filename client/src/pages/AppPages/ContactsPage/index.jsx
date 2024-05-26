import React, { useEffect, useState } from "react";
import styles from "./ContactsPage.module.scss";

import PageTitle from "../../../components/ui/PageTitle";
import Table from "../../../components/ui/Table";
import Button from "../../../components/ui/Button";
import { Link } from "react-router-dom";

const ContactsPage = () => {
   const token = localStorage.getItem("token");
   const [users, setUsers] = useState();

   useEffect(() => {
      const fetchUsers = async () => {
         try {
            const response = await fetch("http://localhost:4444/users", {
               method: "GET",
               headers: {
                  "Content-Type": "application/json",
                  Authorization: token,
               },
            });
            const data = await response.json();
            if (data.success) {
               let users = [];
               data.users.forEach((user) =>
                  users.push([user.fullname, user.phone])
               );
               setUsers(users);
            } else {
               alert(`Error: ${data.msg}`);
            }
         } catch (error) {
            alert(`Error: ${error.message}`);
         }
      };
      fetchUsers();
   }, []);

   return (
      <>
         <PageTitle>Контакты</PageTitle>
         <p>Ваши контакты.</p>
         {users && <Table headers={["ФИО", "Контакт"]} data={users} />}
      </>
   );
};

export default ContactsPage;
