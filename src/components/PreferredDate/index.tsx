import { DateInput } from './DateInput';
import '../../assets/styles/style.scss';

export const PreferredDate = () => {
  return (
    <div className='form-section-wrap'>
    <div className='form-label-top'>Preferred Move in Date</div>
    <div className='form-line'>
      <div className='form-input-wrap-full'>
        <DateInput/>
      </div>
    </div>
  </div>
  );
};
