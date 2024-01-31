import React, { useEffect, useState } from "react";
import "./OrderTable.css";
import axios from "axios";

const CustomerTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/Customers")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const deleteCustomer = (id) => {
    axios
      .delete(`http://localhost:8081/Customers/${id}`)
      .then((res) => {
        setData(data.filter((customer) => customer.id !== id));
      })
      .catch((err) => console.log(err));
  };


  return (
    <>
      <div className="john-table-wrapper">
        <table className="john-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email ID</th>
              <th>Actions</th>
              
            </tr>
          </thead>
          <tbody>
          {data.map((d, i) => (
              <tr key={d.id}> {/* Adding key prop for best practices */}
                <td>{d.id}</td>
                <td>{d.fname}</td>
                <td>{d.lname}</td>
                <td>{d.email}</td>
                <td>
                  <button 
                    className="btn btn-sm btn-danger"
                    onClick={() => deleteCustomer(d.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CustomerTable;
