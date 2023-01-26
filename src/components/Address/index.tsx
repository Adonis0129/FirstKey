import { CountrySelctor } from './ContrySelector';
import "../../assets/styles/style.scss";

export const Address = () => {
  return (
    <div className='form-section-wrap'>
    <div className='form-label-top'>Address</div>
    <div className='form-line'>
      <div className='form-input-wrap-full'>
        <input
          className='form-input' 
          type='text' 
          id='address'
          name="address"
        />
        <div className='form-sub-label'>Street Address</div>
      </div>
    </div>
    <div className='form-line'>
      <div className='form-input-wrap-full'>
        <input
          className='form-input' 
          type='text' 
          id='address'
          name="address"
        />
        <div className='form-sub-label'>Street Address Line2</div>
      </div>
    </div>
    <div className='form-line'>
      <div className='form-input-wrap-divide'>
        <input
          className='form-input' 
          type='text' 
          id='city'
          name="city"
        />
        <div className='form-sub-label'>City</div>
      </div>
      <div className='form-input-wrap-divide'>
        <input
          className='form-input' 
          type='text' 
          id='state'
          name="state"
        />
        <div className='form-sub-label'>State/Province</div>
      </div>
    </div>
    <div className='form-line'>
      <div className='form-input-wrap-divide'>
        <input
          className='form-input' 
          type='number' 
          id='postcode'
          name="postcode"
        />
        <div className='form-sub-label'>Postal/Zip Code</div>
      </div>
      <div className='form-input-wrap-divide'>
        <CountrySelctor/>
        <div className='form-sub-label'>Country</div>
      </div>
    </div>
  </div>
  );
};
