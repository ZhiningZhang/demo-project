import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

//Formik
//use Yup
//https://www.youtube.com/watch?v=VgP_k8mHktw&list=PL6n9fhu94yhVpO8VBlUXbxKUuG-n2b1bL&index=14
/* 
In this video we will learn
1. How to Validate Forms in React
2. How to Validate Forms Data using Yup
3. How to Track the Visited Fields
4. How to display the Validation Error Messages
5. What is getFieldProps method in Formik */

const FormikExApp = () => {
  const formik = useFormik({
    initialValues: {
      Id: "102",
      Name: "",
      Location: "",
      Salary: "123",
      EmailId: "aaa@gmail.com",
    },

    validationSchema: yup.object({
      Name: yup
        .string()
        .min(4, "Name should have at least 4 chars")
        .max(20, "Name should not exceed 20 chars")
        .required("Please Enter Name"),
      Location: yup.string().required("Please Enter Employee Location"),
      EmailId: yup
        .string()
        .email("Invalid email address")
        .required("Please Enter Email Id"),
    }),
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
    },
  });

  return (
    <div>
      <h4>FormikExApp Yup Form</h4>
      <form onSubmit={formik.handleSubmit}>
        <p>
          <label htmlFor="Id">Employee ID : </label>
          <input
            type="text"
            name="Id"
            value={formik.values.Id}
            onChange={formik.handleChange}
          />
        </p>

        <p>
          <label htmlFor="Name">Employee Name : </label>
          <input
            type="text"
            name="Name"
            {...formik.getFieldProps("Name")}
          />
          {formik.touched.Name && formik.errors.Name ? (
            <span style={{ color: "red" }}>{formik.errors.Name}</span>
          ) : null}
        </p>

        <p>
          <label htmlFor="Location">Employee Location : </label>
          <input
            type="text"
            name="Location"
            value={formik.values.Location}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.Location && formik.errors.Location ? (
            <span style={{ color: "red" }}>{formik.errors.Location}</span>
          ) : null}
        </p>

        <p>
          <label htmlFor="Salary">Employee Salary : </label>
          <input
            type="text"
            name="Salary"
            value={formik.values.Salary}
            onChange={formik.handleChange}
          />
        </p>

        <p>
          <label htmlFor="EmailId">Employee EmailId : </label>
          <input
            type="text"
            name="EmailId"
            value={formik.values.EmailId}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.EmailId && formik.errors.EmailId ? (
            <span style={{ color: "red" }}>{formik.errors.EmailId}</span>
          ) : null}
        </p>

        <button type="submit">Create</button>
      </form>

      <p>{JSON.stringify(formik.values)}</p>
    </div>
  );
};

export default FormikExApp;
