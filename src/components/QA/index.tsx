import "../../assets/styles/style.scss";

export const QA = () => {
  return (
    <div>
      {/* How much do you have at hand now to secure the property? (USD) */}
      <div className="form-section-wrap">
        <div className="form-label-top">
          How much do you have at hand now to secure the property? (USD)
        </div>
        <div className="form-line">
          <div className="form-input-wrap-divide">
            <input
              className="form-input"
              type="text"
              id="perperty"
              name="property"
            />
          </div>
        </div>
      </div>
      {/* Do you have pets? */}
      <div className="form-section-wrap">
        <div className="form-label-top">Do you have pets?</div>
        <div className="">
          <div className="form-radio">
            <input type="radio" id="choicePet1" name="pet" value="yes" />
            <label htmlFor="choicePet1" className="form-label-top">
              Yes
            </label>
          </div>
          <div className="form-radio">
            <input type="radio" id="choicePet2" name="pet" value="no" />
            <label htmlFor="choicePet2" className="form-label-top">
              No
            </label>
          </div>
        </div>
      </div>
      {/* Please describe all pets */}
      <div className="form-section-wrap">
        <div className="form-label-top">Please describe all pets</div>
        <div className="form-line">
          <div className="form-input-wrap-full">
            <textarea
              className="form-textArea-input"
              placeholder="Type here..."
              name="TextArea"
              cols={40}
              rows={5}
            />
          </div>
        </div>
      </div>
      {/* Have you ever been evicted? */}
      <div className="form-section-wrap">
        <div className="form-label-top">Have you ever been evicted?</div>
        <div className="">
          <div className="form-radio">
            <input type="radio" id="choiceEvict1" name="evict" value="yes" />
            <label htmlFor="choiceEvict1" className="form-label-top">
              Yes
            </label>
          </div>
          <div className="form-radio">
            <input type="radio" id="choiceEvict2" name="evict" value="no" />
            <label htmlFor="choiceEvict2" className="form-label-top">
              No
            </label>
          </div>
        </div>
      </div>
      {/* Have you ever been convicted of a felony? */}
      <div className="form-section-wrap">
        <div className="form-label-top">
          Have you ever been convicted of a felony?
        </div>
        <div className="">
          <div className="form-radio">
            <input
              type="radio"
              id="choiceConvict1"
              name="convict"
              value="yes"
            />
            <label htmlFor="choiceConvict1" className="form-label-top">
              Yes
            </label>
          </div>
          <div className="form-radio">
            <input type="radio" id="choiceConvict2" name="convict" value="no" />
            <label htmlFor="choiceConvict2" className="form-label-top">
              No
            </label>
          </div>
        </div>
      </div>
      {/* Have you ever declared bankruptcy? */}
      <div className="form-section-wrap">
        <div className="form-label-top">Have you ever declared bankruptcy?</div>
        <div className="">
          <div className="form-radio">
            <input
              type="radio"
              id="choiceBankruptcy1"
              name="bankruptcy"
              value="yes"
            />
            <label htmlFor="choiceBankruptcy1" className="form-label-top">
              Yes
            </label>
          </div>
          <div className="form-radio">
            <input
              type="radio"
              id="choiceBankruptcy2"
              name="bankruptcy"
              value="no"
            />
            <label htmlFor="choiceBankruptcy2" className="form-label-top">
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
