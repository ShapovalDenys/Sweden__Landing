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
  const [tel, setTel] = useState("+");

  const [ipInfo, setIpInfo] = useState();

  const [isLoading, setIsLoading] = useState(false);

  const [errorName, setErrorName] = useState(false);
  const [errorMail, setErrorMail] = useState(false);
  const [errorTel, setErrorTel] = useState(false);

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
    event.preventDefault();

    if (name.length < 1) {
      setErrorName(true)
    } else if (mail.length < 1) {
      setErrorMail(true)
    } else if (tel && tel.length < 2) {
      setErrorTel(true)
    } else {
      setIsLoading(true)
      const DATA = JSON.stringify({name: name, mail: mail, tel: tel, ipInfo: ipInfo})
      console.log(DATA);

        axios.post('/send.php', DATA)
        .then(function (response) {
          console.log(response)
          setIsLoading(false);
          setName("");
          setMail("");
          setTel("");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
}

useEffect(() => {
  if (name.length > 1) {
    setErrorName(false)
  }
}, [name])

useEffect(() => {
  if (mail.length > 1) {
    setErrorMail(false)
  }
}, [mail])

useEffect(() => {
  if (tel && tel.length > 2) {
    setErrorTel(false)
  }
}, [tel])

  return (
  <form className="form">

    <input onChange={(e) => setName(e.target.value)} className={errorName ? "form__input form__input-error" : "form__input"} type="name" name="name" placeholder="Full name" required />

    <input onChange={(e) => setMail(e.target.value)} className={errorMail ? "form__input form__input-error" : "form__input"} type="email" name="email" placeholder="Email" required />

    <PhoneInput
      flags={flags}
      international
      defaultCountry="SE"
      value={tel}
      className={errorTel ? "form__input form__input-error" : "form__input"}
      onChange={setTel}
    />

    {isLoading
    ?
    <div className="lds-ring loader"><div></div><div></div><div></div><div></div></div>
    :
    <button onClick={(event) => submitForm(event)} className={onDisabled ? "form__submit disable" : "form__submit"} type="submit">Sing Up now</button>
    }

  </form>
);
}

export default Form;

