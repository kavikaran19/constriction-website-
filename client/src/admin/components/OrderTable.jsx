import React, { useEffect, useState } from "react";
import "./OrderTable.css";
import axios from "axios";

const OrderTable = ({}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8081/Orders")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  });

 ;

  return (
    <>
      <div className="john-table-wrapper">
        <table className="john-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Services</th>
              <th>Meassages</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr>
                <td>{d.fullName}</td>
                <td>{d.email}</td>
                <td>{d.phone}</td>
                <td>{d.services}</td>
                <td>{d.messages}</td>

                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OrderTable;
