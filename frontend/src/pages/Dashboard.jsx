import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import { useEffect, useState } from "react";
import axios from "axios";

export const Dashboard = () => {
  const [balance, setBalance] = useState(100000);
  console.log(balance);
  useEffect(() => {
    axios
      .get("https://paytm-phd6.onrender.com/api/v1/account/balance", {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((response) => setBalance(response.data.balance));
  }, [balance]);
  console.log(balance);
  return (
    <div>
      <Appbar />
      <div className="m-8 ">
        <Balance value={balance} />
        <Users />
      </div>
    </div>
  );
};
