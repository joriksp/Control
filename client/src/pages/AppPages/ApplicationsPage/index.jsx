import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import PageTitle from "../../../components/ui/PageTitle";
import Table from "../../../components/ui/Table";

const ApplicationsPage = () => {
   const [deals, setDeals] = useState([]);
   const token = localStorage.getItem("token");

   useEffect(() => {
      const fetchUserData = async () => {
         try {
            const response = await fetch("http://localhost:4444/applications", {
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
                  format.push([
                     deal.owner.fullname,
                     deal.name,
                     deal.task,
                     <Link to={`/app/requests/${deal._id}`}>Открыть</Link>,
                  ]);
               });
               console.log(deals);
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
         <PageTitle>Заявки</PageTitle>
         <p>Ваши заявки.</p>
         <Table
            headers={["Заказчик", "Название", "Описание", ""]}
            data={deals}
         />
      </>
   );
};

export default ApplicationsPage;
