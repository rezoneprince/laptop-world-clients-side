import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Dashboard = () => {
  const { title } = useContext(AuthContext);
  title("Dashboard");
  return <div>Dashboard</div>;
};

export default Dashboard;
