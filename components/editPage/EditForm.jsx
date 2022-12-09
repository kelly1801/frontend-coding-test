"use client";
import { useState, useEffect } from "react";

export const addOrUpdateProfile = (id, body, method, url) => {
  return fetch(url, {
    method: method,
    mode: "cors",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((res) => res.json());
};

import { Formik, Form, Field } from "formik";

export default function FormPage({ id, profileValues, post }) {
  const [url, setUrl] = useState("http://localhost:3001/people");
  useEffect(() => {
    !post && setUrl(`http://localhost:3001/people/${id}`);
  }, []);

  async function submitHandler(id, values) {
    const method = post ? "POST" : "PATCH";
    await addOrUpdateProfile(id, values, method, url);
  }
  return (
    <Formik
      initialValues={profileValues}
      onSubmit={(values) => {
        submitHandler(id, values);
      }}
    >
      {({ handleChange }) => (
        <Form>
          <label>
            Name:
            <Field name="fullName" required />
          </label>
          <label>
            Age:
            <Field name="age" type="number" required />
          </label>
          <label>
            Occupation:
            <Field name="occupation" required />
          </label>
          <label>
            NickName:
            <Field name="nickname" required />
          </label>
          <label>
            Gender:
            <Field name="gender" required />
          </label>

          <label>
            Picture URL
            <Field name="picture" required />
          </label>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}
