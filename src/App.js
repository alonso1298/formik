import { useFormik, validateYupSchema } from "formik";

function App() {
  const formik = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      email: '',
    },
    onSubmit: values => console.log(values)
  });
  return (
    <form onSubmit={formik.handleSubmit} >
      <label>Nombre</label>
      <input 
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <label>Apellido</label>
      <input 
        name="lastnaem"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastname}
      />
      <label>Nombre</label>
      <input 
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
    </form>
  );
}

export default App;
