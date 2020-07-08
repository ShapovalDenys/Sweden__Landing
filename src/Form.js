import React, { useState, useEffect } from 'react';

import 'react-phone-number-input/style.css';
import PhoneInput, { isPossiblePhoneNumber } from 'react-phone-number-input';
import flags from 'react-phone-number-input/flags';

import './Form.scss';

const Form = () => {

  const [onDisabled, setOnDisabled] = useState();

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [value, setValue] = useState();

  console.log(name, mail, value);

  useEffect(() => {
    setOnDisabled(isPossiblePhoneNumber(value))
  }, [value])

  return (
  <form className="form">

    <input onChange={(e) => setName(e.target.value)} className="form__input" type="name" name="name" placeholder="Full name" required />

    <input onChange={(e) => setMail(e.target.value)} className="form__input" type="email" name="email" placeholder="Email" required />

    <PhoneInput
      flags={flags}
      international
      defaultCountry="US"
      placeholder="Phone number"
      value={value}
      className="form__input"
      onChange={setValue}
    />

    <button className={onDisabled ? "form__submit disable" : "form__submit"} type="submit">Sing Up now</button>

  </form>
);
}

export default Form;

