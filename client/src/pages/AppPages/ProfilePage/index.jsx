import React from "react";
import styles from "./ProfilePage.module.scss";

import PageTitle from "../../../components/ui/PageTitle";
import Table from "../../../components/ui/Table";
import Button from "../../../components/ui/Button";
import { Link } from "react-router-dom";

const ProfilePage = () => {
   return (
      <>
         <PageTitle>Профиль</PageTitle>
         <p>Ваш профиль.</p>
      </>
   );
};

export default ProfilePage;
