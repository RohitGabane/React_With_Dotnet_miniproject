import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
function Listproductedit() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8080/api/products/" + id)
      .then((res) => res.json())
      .then((result) => {
        setProduct(result);
      });
  }, {});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setProduct((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    let demo = JSON.stringify(product);
    console.log(JSON.parse(demo));
    fetch("http://localhost:8080/api/products/" + id, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: demo,
    }).then((r) => {
      console.log(r);
    });
    event.preventDefault();
    navigate("/Listproducts");

    alert(product);
  };
  return (
    <form onSubmit={handleSubmit} className="my-4">
      <div className="row mb-3">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="id">ProId:</label>
            <input
              type="text"
              className="form-control"
              id="id"
              name="id"
              value={product.id || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="name">product Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={product.name || ""}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              className="form-control"
              id="category"
              name="category"
              value={product.category || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="quantity">quantity:</label>
            <input
              type="text"
              className="form-control"
              id="quantity"
              name="quantity"
              value={product.quantity || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="quantity">price:</label>
            <input
              type="text"
              className="form-control"
              id="price"
              name="price"
              value={product.price || ""}
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
export default Listproductedit;
