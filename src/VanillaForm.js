import React from 'react';
import Error from './Error';

function validate(values) {
  let errors = {};

  if(!values.name) {
      errors.name = "Required Field";
  }

  return errors;
}

export default function VanillaForm() {
    const [name, setName] = React.useState("");
    const [errors, setErrors] = React.useState({});
    const [submitting, setSubmitting] = React.useState(false);
    const values = {name};

    React.useEffect(() => {
        setErrors(validate({name}));
    }, [name]);

    return (
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={event => {
                event.preventDefault();

                if (errors.name) {
                    setSubmitting(true);
                    setTimeout(() => {
                        setSubmitting(false);
                    }, 500);
                } else {
                    setSubmitting(true);
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        setName("");
                    }, 500);
                }
            }}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                  Name
              </label>
              <input className={`shadow appearance-none border ${submitting && errors.name ? 'border-red-500' : null} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                  id="name"
                  type="text"
                  placeholder="Name"
                  onChange={event => {
                      setName(event.target.value)
                  }}
                  value={name}></input>
              {submitting ? (
                  <Error message={errors.name} />
              ) : null}
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" disabled={submitting}>
                Submit
            </button>
        </form>
    )
}
