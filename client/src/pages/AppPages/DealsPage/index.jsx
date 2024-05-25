import React, { useEffect, useState } from "react";
import styles from "./DealsPage.module.scss";

import PageTitle from "../../../components/ui/PageTitle";
import Table from "../../../components/ui/Table";
import Button from "../../../components/ui/Button";
import { useNavigate } from "react-router-dom";

const DealsPage = () => {
   const nav = useNavigate();
   const [deals, setDeals] = useState([]);
   const token = localStorage.getItem("token");

   useEffect(() => {
      const fetchUserData = async () => {
         try {
            const response = await fetch("http://localhost:4444/deals", {
               method: "GET",
               headers: {
                  "Content-Type": "application/json",
                  Authorization: token,
               },
            });
            const data = await response.json();
            if (data.success) {
               const deals = data.deals;
               let format = [];
               deals.forEach((deal, i) => {
                  format.push([(i + 1).toString(), deal.name]);
               });
               setDeals(format);
            } else {
               alert("Ошибка");
            }
         } catch (err) {
            alert(err.message);
         }
      };

      fetchUserData();
   }, []);

   return (
      <>
         <PageTitle>Сделки</PageTitle>
         <p>Ваши сделки.</p>
         {deals.length && <Table headers={["№", "Название"]} data={deals} />}
         <Button
            style={{
               margin: "0 auto",
               marginTop: "auto",
               width: "fit-content",
            }}
            onClick={() => nav("/app/newdeal")}
         >
            Новая сделка
         </Button>
      </>
   );
};

export default DealsPage;
