import '../../assets/styles/style.scss';

export const FullName = () => {
  return (
    <div className="form-section-wrap">
      <div className="form-label-top">Full Name</div>
      <div className="form-line">
        <div className="form-input-wrap-divide">
          <input className="form-input" type="text" id="first_name" />
          <div className="form-sub-label">First Name</div>
        </div>
        <div className="form-input-wrap-divide">
          <input className="form-input" type="text" id="last_name" />
          <div className="form-sub-label">Last Name</div>
        </div>
      </div>
    </div>
  );
};
