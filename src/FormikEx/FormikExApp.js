import React from "react";
import { useFormik } from "formik";

//Formik
//https://www.youtube.com/watch?v=0_WjMxGMzP4&list=PL6n9fhu94yhVpO8VBlUXbxKUuG-n2b1bL&index=13

const FormikExApp = () => {
  const ValidateEmployee = (empData) => {
    const errors = {};

    if (!empData.Name) {
      errors.Name = "Please Enter Employee Name";
    } else if (empData.Name.length < 4) {
      errors.Name = "Employee Name should  exceed 4 chars";
    }
    else if (empData.Name.length > 20) {
        errors.Name = "Employee Name should not exceed 20 chars";
      }

    if (!empData.Location) {
      errors.Location = "Please Enter Employee Location";
    }

    if (!empData.EmailId) {
      errors.EmailId = "Please Enter Email ID";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(empData.EmailId)
    ) {
      errors.EmailId = "Invalid email address";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      Id: "102",
      Name: "Andy",
      Location: "Shanghai",
      Salary: "123",
      EmailId: "aaa@gmail.com",
    },
    validate: ValidateEmployee,
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
    },
  });

  return (
    <div>
      <h4>FormikExApp Form</h4>
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
            value={formik.values.Name}
            onChange={formik.handleChange}
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
