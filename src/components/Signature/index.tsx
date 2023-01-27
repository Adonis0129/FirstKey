import "../../assets/styles/style.scss";
import { SignaturePad } from "./SignaturPad";

export const Signature = () => {
  return (
    <div className="form-section-wrap">
      <div className="form-label-top">Signature</div>
      <div className="form-line">
        <div className="form-input-wrap-full">
          <SignaturePad />
        </div>
      </div>
    </div>
  );
};
