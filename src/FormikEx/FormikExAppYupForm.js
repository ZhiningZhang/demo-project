import React from "react";
import { useFormik, Formik, Field, ErrorMessage } from "formik";
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

const FormikExAppYupForm = () => {
  return (
    <Formik
      initialValues={{
        Id: "102",
        Name: "",
        Location: "",
        Salary: "123",
        EmailId: "aaa@gmail.com",
        Designation: "",
      }}
      validationSchema={yup.object({
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
      })}
      onSubmit={(values) => {
        console.log(JSON.stringify(values));
      }}
    >
      {(props) => (
        <div>
          <h3>Formik Form with Yup </h3>
          <form>
            <p>
              <label>Employee ID : </label>
              <Field name="Id" type="text"></Field>
              <ErrorMessage name="Id"></ErrorMessage>
            </p>
            <p>
              <label>Employee Name : </label>
              <Field name="Name" type="text"></Field>
              <ErrorMessage name="Name"></ErrorMessage>
            </p>
            <p>
              <label>Employee Location : </label>
              <Field name="Location" type="text"></Field>
              <ErrorMessage name="Location"></ErrorMessage>
            </p>
            <p>
              <label>Employee Salary : </label>
              <Field name="Salary" type="text"></Field>
              <ErrorMessage name="Salary"></ErrorMessage>
            </p>
            <p>
              <label>Employee EmailId : </label>
              <Field name="EmailId" type="text"></Field>
              <ErrorMessage name="EmailId"></ErrorMessage>
            </p>
            <p>
              <label>Empployee Designation : </label>
              <Field name="Designation" as="select">
                <option value="AAA">AAA 111</option>
                <option value="BBB">BBB 111</option>
                <option value="CCC">CCC 111</option>
              </Field>
            </p>
            <button type="submit" disabled={!props.isValid}>
              Create
            </button>
          </form>
        </div>
      )}
    </Formik>
  );
};

export default FormikExAppYupForm;
