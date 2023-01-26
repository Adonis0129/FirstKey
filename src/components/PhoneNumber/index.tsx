import PhoneInput from "react-phone-input-2";

import "../../assets/styles/style.scss";

export const PhoneNumber = () => {
  return (
    <div className="form-section-wrap">
      <div className="form-label-top">Phone Number</div>
      <div className="form-line">
        <div className="form-input-wrap-full">
          <PhoneInput
            // value={phoneNumber}
            // onChange={(phone) => setPhoneNumber(phone)}
            specialLabel=""
            inputProps={{
              name: "phone",
              required: true,
              autoFocus: true,
            }}
            inputClass="form-input"
            dropdownStyle={{ height: "110px", width: "auto" }}
          />
          <div className="form-sub-label">
            Please enter a vaild phone number
          </div>
        </div>
      </div>
    </div>
  );
};
