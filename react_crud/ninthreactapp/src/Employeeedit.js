import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
export function Employeeedit(props) {
  const [employee, setEmployee] = useState({});
  const { id } = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    fetch("https://localhost:7200/api/Employee/" + id)
      .then((res) => res.json())
      .then((result) => {
        setEmployee(result);
      });
  }, {});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setEmployee((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    let demo = JSON.stringify(employee);
    console.log(JSON.parse(demo));
    fetch("https://localhost:7200/api/Employee/" + id, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: demo,
    }).then((r) => {
      console.log(r);
    });
    event.preventDefault();
    navigate("/ListEmp");

    alert(employee);
  };
  return (
    <form onSubmit={handleSubmit} className="my-4">
      <div className="row mb-3">
        {/* <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="id">Id:</label>
            <input
              type="text"
              className="form-control"
              id="id"
              name="id"
              value={employee.id || ""}
              onChange={handleChange}
            />
          </div>
        </div> */}
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={employee.name || ""}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              value={employee.email || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="department">Department:</label>
            <input
              type="text"
              className="form-control"
              id="department"
              name="department"
              value={employee.department || ""}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
       
      <div className="row">
        <div className="col-md-12 text-center">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
export default Employeeedit;
