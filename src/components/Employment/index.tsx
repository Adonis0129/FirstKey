import "../../assets/styles/style.scss";

export const Employment = () => {
  return (
    <div>
      {/* Are you currently employed? */}
      <div className="form-section-wrap">
        <div className="form-label-top">Are you currently employed?</div>
        <div className="">
          <div className="form-radio">
            <input type="radio" id="choice1" name="employ" value="yes" />
            <label htmlFor="choice1" className="form-label-top">
              Yes
            </label>
          </div>
          <div className="form-radio">
            <input type="radio" id="choice2" name="employ" value="no" />
            <label htmlFor="choice2" className="form-label-top">
              No
            </label>
          </div>
        </div>
      </div>
      {/* Length of Employment */}
      <div className="form-section-wrap">
        <div className="form-label-top">Length of Employment</div>
        <div className="form-line">
          <div className="form-input-wrap-full">
            <input
              className="form-input"
              type="text"
              id="length_of_employment"
              name="length_of_employment"
            />
          </div>
        </div>
      </div>
      {/* Current Employer */}
      <div className="form-section-wrap">
        <div className="form-label-top">Current Employer</div>
        <div className="form-line">
          <div className="form-input-wrap-full">
            <input
              className="form-input"
              type="text"
              id="employer"
              name="employer"
            />
          </div>
        </div>
      </div>
      {/* Occupation? */}
      <div className="form-section-wrap">
        <div className="form-label-top">Occupation?</div>
        <div className="form-line">
          <div className="form-input-wrap-full">
            <input
              className="form-input"
              type="text"
              id="occupation"
              name="occupation"
            />
          </div>
        </div>
      </div>
      {/* Monthly Salary */}
      <div className="form-section-wrap">
        <div className="form-label-top">Monthly Salary(USD)</div>
        <div className="form-line">
          <div className="form-input-wrap-full">
            <input
              className="form-input"
              type="text"
              id="salary"
              name="salary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
