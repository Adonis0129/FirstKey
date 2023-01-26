import "../../assets/styles/style.scss";

export const Email = () => {
  return (
    <div className="form-section-wrap">
      <div className="form-label-top">E-mail</div>
      <div className="form-line">
        <div className="form-input-wrap-full">
          <input
            className="form-input"
            type="email"
            id="email"
            name="email"
            placeholder="ex: myname@example.com"
          />
          <div className="form-sub-label">example@example.com</div>
        </div>
      </div>
    </div>
  );
};
