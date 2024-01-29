import logo from './logo.svg';
import './App.css';
import { Formik, Field, Form } from 'formik';

function App() {

  const p =  (values) => {
    
    console.log(values);
    alert(JSON.stringify(values, null, 2));
  }
  return (

    <div>
    <h1>Sign Up</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        jobType: [],
        location: [],
        picked: '',
      }}
      onSubmit={p}
    >
      <Form>
        <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" placeholder="Jane" />

        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" placeholder="Doe" />

        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />

<div className="label">
             What best describes you? (check all that apply)
           </div>
           <label>
             <Field type="checkbox" name="jobType" value="designer" />
             Designer
           </label>
           <label>
             <Field type="checkbox" name="jobType" value="developer" />
             Developer
           </label>
           <label>
             <Field type="checkbox" name="jobType" value="product" />
             Product Manager
           </label>

           <label htmlFor="location">Where do you work?</label>
           <Field
             component="select"
             id="location"
             name="location"
             multiple={true}
           >
             <option value="NY">New York</option>
             <option value="SF">San Francisco</option>
             <option value="CH">Chicago</option>
             <option value="OTHER">Other</option>
           </Field>

            <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="picked" value="One" />
              One
            </label>
            <label>
              <Field type="radio" name="picked" value="Two" />
              Two
            </label>

            </div>


        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
   
  );
}

export default App;
