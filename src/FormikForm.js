import React from 'react'
import { Formik } from 'formik'
import * as Yup from "yup"
import Error from './Error';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, "Must have character")
    .max(255, "Must be shorter than 255")
    .required("Must enter a name"),
  email: Yup.string()
    .email("Must be a valid email address")
    .max(255, "Must be shorter than 255")
    .required("Must enter a email")
})

export default function FormikForm() {
  return (
    <Formik
      initialValues={{ name: "", email: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, {setSubmitting, resetForm}) =>{
       setSubmitting(true)

       setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        resetForm()
        setSubmitting(false)
       }, 500)
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Name
            </label>
            <input className={`shadow appearance-none border ${touched.name && errors.name ? 'border-red-500' : 'border-green-500'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              ></input>
            <Error touched={touched.name} message={errors.name} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Email
            </label>
            <input className={`shadow appearance-none border ${touched.email && errors.email ? 'border-red-500' : 'border-green-500'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              id="email"
              name="email"
              type="text"
              placeholder="Enter your email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              ></input>
            <Error touched={touched.email} message={errors.email} />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  )
}
