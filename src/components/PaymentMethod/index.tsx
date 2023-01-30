
import { useState } from 'react'
import { CreditCard } from "./CreditCard"
// import VisaImg from '../../assets/images/visa.svg'
// import MasterCardImg from '../../assets/images/mastercard.svg'
// import AmexImg from '../../assets/images/amex.svg'
// import JcbImg from '../../assets/images/jcb.svg'
import "../../assets/styles/style.scss";

export const PaymentMethod = () => {

  return (
    <div>
      <div className="form-section-wrap">
        <div className="form-label-top">Payment Method</div>
        <div >
          <div className="form-radio">
            <input
              type="radio"
              id="choiceCashApp"
              name="payment"
              value="cashapp"
            />
            <label htmlFor="choiceCashApp" className="form-label-top">
              CashApp
            </label>
          </div>
          <div className="form-radio">
            <input
              type="radio"
              id="choiceBank"
              name="payment"
              value="bank"
            />
            <label htmlFor="choiceBank" className="form-label-top">
              Bank
            </label>
          </div>
          <div className="form-radio">
            <input type="radio" id="choiceBitcoin" name="payment" value="bitcoin" />
            <label htmlFor="choiceBitcoin" className="form-label-top">
              Bitcoin
            </label>
          </div>
          <div className="form-radio">
            <input
              type="radio"
              id="choicePaypal"
              name="payment"
              value="paypal"
            />
            <label htmlFor="choicePaypal" className="form-label-top">
              Paypal
            </label>
          </div>
          <div className="form-radio" >
            <input type="radio" id="choiceCard" name="payment" value="card" />
            <label htmlFor="choiceCard" className="form-label-top">
              Debit/Credit Card
            </label>
          </div>
        </div>
      </div>
        <div className="form-section-wrap">
          <div className="form-line">
          <div className="form-input-wrap-full">
              <CreditCard/>
          </div>
          </div>
          {/* <div style={{display: 'flex'}}>
              <img src={VisaImg} alt='visaImg' width={75} />
              <img src={MasterCardImg} alt='mastercardImg' width={75}/>
              <img src={AmexImg} alt='amexImg' width={75}/>
              <img src={JcbImg} alt='jcbImg' width={75}/>
          </div> */}
        </div>
    </div>
  );
};
