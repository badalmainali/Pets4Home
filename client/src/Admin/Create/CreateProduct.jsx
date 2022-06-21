import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@mui/material";

const CreateProduct = () => {
  const [data, setData] = useState({
    name: "",
    image:"",
    breed:"",
    category:"",
    description:"",
    stock:"",
    price:"",

  });
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleInputState = (name, value) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const url = process.env.REACT_APP_API_URL + "/songs"
      const { data: res } = await axios.post(
        "http://localhost:5000/api/products/create",
        data
      );
      window.location.reload(false);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <h2>CreateProduct</h2>
      <Grid>
        <Grid item>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
               Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                name="name"
                aria-describedby="emailHelp"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
               Price
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputEmail1"
                price="price"
                aria-describedby="emailHelp"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
               Upload an Image
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                image='image'
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
              Breed
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                breed='breed'
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
              Category
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                category="category"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
              Description
              </label>
              <input
                type="text-box"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                description='description'
                onChange={handleChange}
              />
            </div>
         
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
              Count in Stock
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                stock="stock"
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default CreateProduct;
