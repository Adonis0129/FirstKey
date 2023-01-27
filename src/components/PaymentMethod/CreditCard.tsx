import React, { useState } from "react";
import Card from "react-credit-cards";

import { SupportedCards } from "./SupportedCards";
import "../../assets/styles/style.scss";

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "./utils";

import "react-credit-cards/es/styles-compiled.css";
import "./payment.scss";

export const CreditCard = () => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [issuer, setIssuer] = useState("");
  const [focused, setFocused] = useState("");

  const handleCallback = ({ _issuer }, isValid) => {
    if (isValid) {
      setIssuer(_issuer);
    }
  };

  const handleInputFocus = ({ target }) => {
    setFocused(target.name);
  };

  const handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
      setNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
      setExpiry(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
      setCvc(target.value);
    } else if (target.name === "name") {
      setName(target.value);
    }
  };

  return (
    <div className="form-line">
      <div className="">
        <Card
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focused}
          callback={handleCallback}
        />
        <div className='form-sub-label'>{issuer}</div>
      </div>
      <div className="form-input-wrap-divide">
        <div >
          <input
            type="tel"
            name="number"
            className="form-input"
            placeholder="Card Number"
            pattern="[\d| ]{16,22}"
            required
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <input
            type="text"
            name="name"
            className="form-input"
            placeholder="Name"
            required
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />

          <input
            type="tel"
            name="expiry"
            className="form-input"
            placeholder="Valid Thru"
            pattern="\d\d/\d\d"
            required
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />

          <input
            type="tel"
            name="cvc"
            className="form-input"
            placeholder="CVC"
            pattern="\d{3,4}"
            required
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>
      </div>
    </div>
  );
};
