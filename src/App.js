import { Formik, Form, Field, ErrorMessage } from "formik";
import TextInput from './components/TextInput';
import CheckBox from "./components/CheckBox";
import Select from "./components/Select";

const validate = (values) => {
  const errors = {}
  
  if(!values.name){
    errors.name = 'Requerido';
  } else if (values.name.length < 5) {
    errors.name = 'El nombre es muy corto';
  }

  if(!values.lastname){
    errors.lastname = 'Requerido';
  } else if (values.lastname.length < 5) {
    errors.lastname = 'El apellido es muy corto';
  }
  
  if(!values.email){
    errors.email = 'Requerido';
  } else if (values.email.length < 5) {
    errors.email = 'El apellido es muy corto';
  }

  return errors;
  
}

function App() {
  return (
    <Formik
        initialValues={{ name: '', lastname: '', email: '', accept: false, gato: ''}}
        validate={validate}
        onSubmit={values => console.log(values)}
    >
      <Form>
        <TextInput name="name" label="Nombre" />
        <br />
        <TextInput name="lastname" label="Apellido" />
        <br />
        <TextInput name="email" label="Correo" />
        <Select label="Tipo de gato" name="gato">
          <option value="">Seleccione Gato</option>
          <option value="feliz">Gato Feliz</option>
          <option value="triste">Gato Triste</option>
        </Select>
        <CheckBox name="accept">
          Aceptar términos y condiciones
        </CheckBox>
        <br />
        <button type="submit">Enviar</button>     
      </Form>
        
    </Formik>
  );
}

export default App;
