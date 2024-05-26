import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import PageTitle from "../../../components/ui/PageTitle";
import Table from "../../../components/ui/Table";

const ApplicationPage = () => {
   const { id } = useParams();
   const token = localStorage.getItem("token");

   const [deal, setDeal] = useState();

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch(`http://localhost:4444/deals/${id}`, {
               method: "GET",
               headers: {
                  "Content-Type": "application/json",
                  Authorization: token,
               },
            });
            const data = await response.json();
            if (data.success) {
               setDeal(data.deal);
            } else {
               alert("Ошибка", data.msg);
            }
         } catch (err) {
            alert(err.message);
         }
      };

      fetchData();
   }, []);

   return (
      <>
         <PageTitle>Заявка {id}</PageTitle>
         {deal && (
            <Table
               headers={["Заказчик", "Название"]}
               data={[
                  [deal.owner.fullname, deal.name],
                  [
                     `Описание: ${deal.task}`,
                     <img
                        width={"100%"}
                        src={`http://localhost:4444${deal?.file}`}
                        alt={deal?.file}
                     />,
                  ],
               ]}
            />
         )}
      </>
   );
};

export default ApplicationPage;
