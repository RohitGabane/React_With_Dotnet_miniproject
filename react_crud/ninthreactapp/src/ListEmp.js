import React from "react";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
function ListEmp(props) {
  const [employees, setEmployee] = useState([]);
  useEffect(() => {
    fetch("https://localhost:7200/api/Employee")
      .then((res) => res.json())
      .then((result) => {
        setEmployee(result);
      });
  }, []);
  return (
    <div>
      <h2 align="center">Employees Data...</h2>
      <h3><a href="/empcreate">create Emp</a></h3>
      <Table striped hover variant="light">
        {" "}
        <thead>
          {/* <tr>
            <th>Sr.No</th>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Display</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr> */}
           <tr color="">
      <th className="table-heading">Sr.No</th>
      <th className="table-heading">Id</th>
      <th className="table-heading">Name</th>
      <th className="table-heading">Email</th>
      <th className="table-heading">Department</th>
      <th className="table-heading">Display</th>
      <th className="table-heading">Edit</th>
      <th className="table-heading">Delete</th>
    </tr>
        </thead>
        <tbody>
          {employees.map((emp, i) => (
            <tr key={emp.id}>
              <td>{i}</td>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.department}</td>
              {/* <td>
                {" "}
                <a href={"/emp/" + emp.id}>display</a>
              </td>
              <td>
                {" "}
                <a href={"/empedit/" + emp.id}>Edit</a>
              </td>
              <td>
                {" "}
                <a href={"/empdel/" + emp.id}>delete</a>
              </td> */}
              <td>
                <Button variant="primary" href={"/emp/" + emp.id}>
                  Display
                </Button>
              </td>
              <td>
                <Button variant="warning" href={"/empedit/" + emp.id}>
                  Edit
                </Button>
              </td>
              <td>
                <Button variant="danger" href={"/empdel/" + emp.id}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
export default ListEmp;
