import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import { useEffect, useState, } from "react";
import axios from "axios";

export const Dashboard = () => {
  const [balance, setBalance] = useState(100000);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/account/balance")
      .then((response) => {
        setBalance(response.balance);
      });
  }, [balance]);
  return (
    <div>
      <Appbar />
      <div className="m-8">
        <Balance value={balance} />
        <Users />
      </div>
    </div>
  );
};
