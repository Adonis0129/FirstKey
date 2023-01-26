import "../../assets/styles/style.scss";

export const FloorPlan = () => {
  return (
    <div className="form-section-wrap">
      <div className="form-label-top">Preferred Floor Plan</div>
      <div className="form-line">
        <div className="form-input-wrap-divide">
          {/* <label htmlFor="plan-select">please Select</label> */}
          <select name="plan" id="plan-select" className="form-input">
            <option value="">Please Select</option>
            <option value="one">550 sq. ft. Junior 1 Bed/1Bath</option>
            <option value="two">750 sq. ft. 1 Bed/1Bath</option>
            <option value="three">1000 sq. ft. 2 Bed/1.5Bath</option>
            <option value="four">1140 sq. ft. 1 Bed/2Bath</option>
            <option value="five">1500 sq. ft. 3 Bed/2Bath</option>
          </select>
        </div>
      </div>
    </div>
  );
};
