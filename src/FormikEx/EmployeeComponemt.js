import React from "react";
import { useFormik } from "formik";

//Formik
//https://www.youtube.com/watch?v=0_WjMxGMzP4&list=PL6n9fhu94yhVpO8VBlUXbxKUuG-n2b1bL&index=13

const FormikExApp = () => {
  const formik = useFormik({
    initialValues: {
      Id: "102",
      Name: "Andy",
      Location: "Shanghai",
      Salary: "123",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
    },
  });
  
  return (
    <div>
      <h4>FormikExApp Form</h4>
      <form onSubmit={formik.onSubmit}>
          <p>
              <label htmlFor="Id">Employee ID : </label>
              <input type="text" name="Id" value={formik.values.Id} onChange = {formik.handleChange}/>
          </p>

          <p>
              <label htmlFor="Name">Employee Name : </label>
              <input type="text" name="Name" value={formik.values.Name} onChange = {formik.handleChange}/>
          </p>

          <p>
              <label htmlFor="Location">Employee Location : </label>
              <input type="text" name="Location" value={formik.values.Location} onChange = {formik.handleChange}/>
          </p>

          <p>
              <label htmlFor="Salary">Employee Salary : </label>
              <input type="text" name="Salary" value={formik.values.Salary} onChange = {formik.handleChange}/>
          </p>

          <button type ="submit" >Create</button>
      </form>

      <p>
          {JSON.stringify(formik.values)}
      </p>
    </div>
  );
};

export default FormikExApp;
