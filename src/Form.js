import React, { useState, useEffect } from 'react';
import axios from 'axios';

import 'react-phone-number-input/style.css';
import PhoneInput, { isPossiblePhoneNumber } from 'react-phone-number-input';
import flags from 'react-phone-number-input/flags';

import './Form.scss';

const Form = () => {

  const [onDisabled, setOnDisabled] = useState();

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [tel, setTel] = useState();

  const [ipInfo, setIpInfo] = useState()

  const getIP = () => {
    return fetch(`https://ipinfo.io/json`)
      .then(response => response.json());
  }

  const loadIpInfo = async () => {
    const [info] = await Promise.all(
      [getIP()],
    );
    setIpInfo(JSON.stringify(info))
  }

  useEffect(() => {
    setOnDisabled(isPossiblePhoneNumber(tel))
  }, [tel])

  useEffect(() => {
    loadIpInfo()
  }, [])

  const submitForm = (event) => {
    event.preventDefault()
    const DATA = JSON.stringify({name: name, mail: mail, tel: tel, ipInfo: ipInfo})
    console.log(DATA);

    axios.post('/send.php', DATA)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
  <form className="form">

    <input onChange={(e) => setName(e.target.value)} className="form__input" type="name" name="name" placeholder="Full name" required />

    <input onChange={(e) => setMail(e.target.value)} className="form__input" type="email" name="email" placeholder="Email" required />

    <PhoneInput
      flags={flags}
      international
      defaultCountry="US"
      placeholder="Phone number"
      value={tel}
      className="form__input"
      onChange={setTel}
    />

    <button onClick={submitForm} className={onDisabled ? "form__submit disable" : "form__submit"} type="submit">Sing Up now</button>

  </form>
);
}

export default Form;

