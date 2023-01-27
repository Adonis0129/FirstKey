import { DragDropFile } from "./DragDropFile";
import "../../assets/styles/style.scss";

export const Government = () => {
  return (
    <div>
      {/* Social Security Number (SSN) */}
      <div className="form-section-wrap">
        <div className="form-label-top">Social Security Number (SSN)</div>
        <div className="form-line">
          <div className="form-input-wrap-divide">
            <input className="form-input" type="text" id="ssn" name="ssn" />
          </div>
        </div>
      </div>
      {/* Front Government ID */}
      <div className="form-section-wrap">
        <div className="form-label-top">Front Government ID</div>
        <div className="form-line">
          <div className="form-input-wrap-full">
            <DragDropFile />
          </div>
        </div>
      </div>
      {/* Back Government ID */}
      <div className="form-section-wrap">
        <div className="form-label-top">Back Government ID</div>
        <div className="form-line">
          <div className="form-input-wrap-full">
            <DragDropFile />
          </div>
        </div>
      </div>
      {/* Selfie */}
      <div className="form-section-wrap">
        <div className="form-label-top">Selfie</div>
        <div className="form-line">
          <div className="form-input-wrap-full">
            <DragDropFile />
          </div>
        </div>
      </div>
    </div>
  );
};
