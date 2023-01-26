import { DateInput } from './DateInput';
import '../../assets/styles/style.scss';

export const PreferredData = () => {
  return (
    <div className='form-section-wrap'>
    <div className='form-label-top'>Preferred Move in Data</div>
    <div className='form-line'>
      <div className='form-input-wrap-full'>
        <DateInput/>
      </div>
    </div>
  </div>
  );
};
