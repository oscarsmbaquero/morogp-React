import React, { useState } from 'react';
import './Form.scss';

const INITIAL_STATE = {
  name: '',
  dorsal: '',
  nacionality: '',
  image: '',
};

const Form = (props) => {
  const [formValues, setFormValues] = useState(INITIAL_STATE);


  const submitForm = (ev) => {
    ev.preventDefault();
    const { name, dorsal, nacionality, image } = formValues;

    if (!name || !dorsal || !nacionality || !image) {
      console.log('Debes rellenar todos los campos');
      return;
    }

    console.log(formValues);
    props.addProfile(formValues);
    setFormValues(INITIAL_STATE);
  };



  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormValues(
      {
        ...formValues,
        [name]: value,
      }
    );
  };


  return (
    <form onSubmit={submitForm}>
      <fieldset>
        <label>
          <p>Nombre</p>
          <input type="text" name="name" value={formValues.name} onChange={handleInput} />
        </label>

        <label>
          <p>Dorsal</p>
          <input type="text" name="dorsal" value={formValues.dorsal} onChange={handleInput} />
        </label>

        <label>
          <p>Nacionalidad</p>
          <input type="text" name="nacionality" value={formValues.nacionality} onChange={handleInput} />
        </label>

        <label>
          <p>Imagen</p>
          <input type="text" name="image" value={formValues.image} onChange={handleInput} />
        </label>

        <div className="img">
          {formValues.image ? (
            <img src={formValues.image} alt={formValues.name} width="200px" />
          ): null}
        </div>

        <div>
          <button type="submit">Guardar Perfil</button>
        </div>
      </fieldset>
    </form>
  )
};

export default Form;