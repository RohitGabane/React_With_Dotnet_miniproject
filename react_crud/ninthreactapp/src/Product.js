import React from "react";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
function Listproduct(props) {
  const [product, setproduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then((res) => res.json())
      .then((result) => {
        setproduct(result);
      });
  }, []);
  return (
    <div>
      <h2 align="center">product Data...</h2>
      {/* <h3><a href="/product">create product</a></h3> */}
      <Table striped hover variant="light">
        {" "}
        <thead>
         
           <tr color="">
      <th className="table-heading">Sr.No</th>
      <th className="table-heading">Id</th>
      <th className="table-heading">Proname</th>
      <th className="table-heading">category</th>
      <th className="table-heading">quantity</th>
      <th className="table-heading">price</th>
      <th className="table-heading">Display</th>
      <th className="table-heading">Edit</th>
      <th className="table-heading">Delete</th>
    </tr>
        </thead>
        <tbody>
          {product.map((product, i) => (
            <tr key={product.id}>
              <td>{i}</td>
              <td>{product.proid}</td>
              <td>{product.proname}</td>
              <td>{product.category}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
            
              <td>
                <Button variant="primary" href={"/product/" + product.id}>
                  Display
                </Button>
              </td>
              <td>
                <Button variant="warning" href={"/productedit/" + product.id}>
                  Edit
                </Button>
              </td>
              <td>
                <Button variant="danger" href={"/productdel/" + product.id}>
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
export default Listproduct;
