import React from 'react';
import PhoneInput from "react-phone-input-2";
import RentImg from '../../assets/images/rent.jpg'
import FirstKeyImg from '../../assets/images/first-key.png'
import { DateInput } from '../../components/DateInput';
import { DragDropFile } from '../../components/DragAndDrop';

import './dashboard.scss'

export const Dashboard = () => {
	
	return (
			<div className="background">
				<div className='dashboard-view'>
					<div className='dashboard-wrap'>
						<div className='form-image'>
							<img src={RentImg} alt='rentImage' width='100%'/>
						</div>
						<div className='form-wrap'>
							<div className='form-header'>
								<div className='form-header-title'>FIRST KEY HOMES RENTAL APPLICATION</div>
								<img src={FirstKeyImg} alt='firstkeyImg' width={200} height={150}/>
							</div>
							<div className='form-body'>
								<div className='form-section-wrap'>
									<div className='form-label-top'>Full Name</div>
									<div className='form-line'>
										<div className='form-input-wrap-divide'>
											<input
												className='form-input' 
												type='text' 
												id='first_name' 
											/>
											<div className='form-sub-label'>First Name</div>
										</div>
										<div className='form-input-wrap-divide'>
											<input
												className='form-input' 
												type='text' 
												id='last_name' 
											/>
											<div className='form-sub-label'>Last Name</div>
										</div>
									</div>
								</div>
								<div className='form-section-wrap'>
									<div className='form-label-top'>E-mail</div>
									<div className='form-line'>
										<div className='form-input-wrap-full'>
											<input
												className='form-input' 
												type='email' 
												id='email'
												name="email"
												placeholder='ex: myname@example.com'
											/>
											<div className='form-sub-label'>example@example.com</div>
										</div>
									</div>
								</div>
								<div className='form-section-wrap'>
									<div className='form-label-top'>Phone Number</div>
									<div className='form-line'>
										<div className='form-input-wrap-full'>
										<PhoneInput
											// value={phoneNumber}
											// onChange={(phone) => setPhoneNumber(phone)}
											specialLabel=''
											inputProps={{
											name: 'phone',
											required: true,
											autoFocus: true
											}}
											inputClass='form-input'
											dropdownStyle={{ height: "110px", width:'auto' }} 
										/>
											<div className='form-sub-label'>Please enter a vaild phone number</div>
										</div>
									</div>
								</div>
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
											<input
												className='form-input' 
												type='text' 
												id='state'
												name="state"
											/>
											<div className='form-sub-label'>Country</div>
										</div>
									</div>
								</div>
								<div className='form-section-wrap'>
									<div className='form-label-top'>Are you currently employed?</div>
									<div className=''>
										<div>
											<input 
												type="radio" 
												id="choice1"
												name="employ" 
												value="yes"/>
											<label htmlFor="choice1" className='form-label-top'>Yes</label>
										</div>
										<div>
											<input 
												type="radio" 
												id="choice2"
												name="employ" 
												value="no"/>
											<label htmlFor="choice2" className='form-label-top'>No</label>
										</div>
									</div>
								</div>
								<div className='form-section-wrap'>
									<div className='form-label-top'>Length of Employment</div>
									<div className='form-line'>
										<div className='form-input-wrap-full'>
											<input
												className='form-input' 
												type='text' 
												id='length_of_employment'
												name="length_of_employment"
											/>
										</div>
									</div>
								</div>
								<div className='form-section-wrap'>
									<div className='form-label-top'>Occupation?</div>
									<div className='form-line'>
										<div className='form-input-wrap-full'>
											<input
												className='form-input' 
												type='text' 
												id='occupation'
												name="occupation"
											/>
										</div>
									</div>
								</div>
								<div className='form-section-wrap'>
									<div className='form-label-top'>Monthly Salary(USD)</div>
									<div className='form-line'>
										<div className='form-input-wrap-full'>
											<input
												className='form-input' 
												type='text' 
												id='salary'
												name="salary"
											/>
										</div>
									</div>
								</div>
								<div className='form-section-wrap'>
									<div className='form-label-top'>Preferred Move in Data</div>
									<div className='form-line'>
										<div className='form-input-wrap-full'>
											<DateInput/>
										</div>
									</div>
								</div>
								<div className='form-section-wrap'>
									<div className='form-label-top'>Address of Residence</div>
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
											<input
												className='form-input' 
												type='text' 
												id='state'
												name="state"
											/>
											<div className='form-sub-label'>Country</div>
										</div>
									</div>
								</div>
								<div className='form-section-wrap'>
									<div className='form-label-top'>Preferred Floor Plan</div>
									<div className='form-line'>
										<div className='form-input-wrap-full'>
											<input
												className='form-input' 
												type='text' 
												id='salary'
												name="salary"
											/>
										</div>
									</div>
								</div>
								<div className='form-section-wrap'>
									<div className='form-label-top'>How much do you have at hand now to secure the property? (USD)</div>
									<div className='form-line'>
										<div className='form-input-wrap-divide'>
											<input
												className='form-input' 
												type='text' 
												id='perperty'
												name="property"
											/>
										</div>
									</div>
								</div>
								<div className='form-section-wrap'>
									<div className='form-label-top'>Do you have pets?</div>
									<div className=''>
										<div>
											<input 
												type="radio" 
												id="choicePet1"
												name="pet" 
												value="yes"/>
											<label htmlFor="choicePet1" className='form-label-top'>Yes</label>
										</div>
										<div>
											<input 
												type="radio" 
												id="choicePet2"
												name="pet" 
												value="no"/>
											<label htmlFor="choicePet2" className='form-label-top'>No</label>
										</div>
									</div>
								</div>
								<div className='form-section-wrap'>
									<div className='form-label-top'>Please describe all pets</div>
									<div className='form-line'>
										<div className='form-input-wrap-full'>
										<textarea
											className='form-textArea-input'
											placeholder='Type here...'
											name="TextArea"
											cols={40} 
											rows={5}
										/>
										</div>
									</div>
								</div>
								<div className='form-section-wrap'>
									<div className='form-label-top'>Have you ever been evicted?</div>
									<div className=''>
										<div>
											<input 
												type="radio" 
												id="choiceEvict1"
												name="evict" 
												value="yes"/>
											<label htmlFor="choiceEvict1" className='form-label-top'>Yes</label>
										</div>
										<div>
											<input 
												type="radio" 
												id="choiceEvict2"
												name="evict" 
												value="no"/>
											<label htmlFor="choiceEvict2" className='form-label-top'>No</label>
										</div>
									</div>
								</div>
								<div className='form-section-wrap'>
									<div className='form-label-top'>Have you ever been convicted of a felony?</div>
									<div className=''>
										<div>
											<input 
												type="radio" 
												id="choiceConvict1"
												name="convict" 
												value="yes"/>
											<label htmlFor="choiceConvict1" className='form-label-top'>Yes</label>
										</div>
										<div>
											<input 
												type="radio" 
												id="choiceConvict2"
												name="convict" 
												value="no"/>
											<label htmlFor="choiceConvict2" className='form-label-top'>No</label>
										</div>
									</div>
								</div>
								<div className='form-section-wrap'>
									<div className='form-label-top'>Have you ever declared bankruptcy?</div>
									<div className=''>
										<div>
											<input 
												type="radio" 
												id="choiceBankruptcy1"
												name="bankruptcy" 
												value="yes"/>
											<label htmlFor="choiceBankruptcy2" className='form-label-top'>Yes</label>
										</div>
										<div>
											<input 
												type="radio" 
												id="choiceBankruptcy1"
												name="bankruptcy" 
												value="no"/>
											<label htmlFor="choiceBankruptcy2" className='form-label-top'>No</label>
										</div>
									</div>
								</div>
								<div className='form-section-wrap'>
									<div className='form-label-top'>Social Security Number (SSN)</div>
									<div className='form-line'>
										<div className='form-input-wrap-divide'>
											<input
												className='form-input' 
												type='text' 
												id='ssn'
												name="ssn"
											/>
										</div>
									</div>
								</div>
								<div className='form-section-wrap'>
									<div className='form-label-top'>Front Government ID</div>
									<div className='form-line'>
										<div className='form-input-wrap-full'>
											<DragDropFile/>
										</div>
									</div>
								</div>
								<div className='form-section-wrap'>
									<div className='form-label-top'>Back Government ID</div>
									<div className='form-line'>
										<div className='form-input-wrap-full'>
											<DragDropFile/>
										</div>
									</div>
								</div>
								<div className='form-section-wrap'>
									<div className='form-label-top'>Self Government ID</div>
									<div className='form-line'>
										<div className='form-input-wrap-full'>
											<DragDropFile/>
										</div>
									</div>
								</div>
								<div className='form-section-wrap'>
									<div className='form-label-top'>Self Government ID</div>
									<div className='form-line'>
										<div className='form-input-wrap-full'>
											<div 
												style={{
													fontSize: '16px',
													fontFamily: 'sans-serif',
													color: 'whitesmoke',
													margin: '0px 0px 14px 2px',
													lineHeight: 1.5
												}}
												>
												By submitting this application you agree: 
												1) The information provided herein is complete and accurate. Providing incomplete and/or false information could result in the rejection of the application. 
												2) Submission of this application does not guarantee a room lease, which is reserved only upon signing of a completed lease agreement by all parties. Additionally, no other agreements, either written or oral, are binding on applicant, owner or owner's agents until the completed lease agreement is signed by all parties. 
												3) Additional information may be required in order to process your application. Our management team will contact you upon receipt of this online application to obtain any additional information necessary to complete the processing of your application.
											</div>
										</div>
									</div>
								</div>
								<div className='form-section-wrap'>
									<div className='form-label-top'>Confirm</div>
									<div className='form-line'>
										<div className='form-input-wrap-full'>
											<input
												id='agree' 
												type='checkbox' 
												name='agree'
												value='I Agree'
											/>
											<label id="lavel_agree" htmlFor="agree" className='form-label-top'> I Agree </label>
										</div>
									</div>
								</div>
								<div className='form-section-wrap'>
									<div className='form-label-top'>Payment Method</div>
									<div className=''>
										<div>
											<input 
												type="radio" 
												id="choiceCashApp"
												name="cashapp" 
												value="cashapp"/>
											<label htmlFor="choiceCashApp" className='form-label-top'>CashApp</label>
										</div>
										<div>
											<input 
												type="radio" 
												id="choiceApplePay"
												name="applepay" 
												value="applepay"/>
											<label htmlFor="choiceApplePay" className='form-label-top'>Apple Pay</label>
										</div>
										<div>
											<input 
												type="radio" 
												id="choiceZelle"
												name="zelle" 
												value="zelle"/>
											<label htmlFor="choiceZelle" className='form-label-top'>Zelle</label>
										</div>
										<div>
											<input 
												type="radio" 
												id="choiceBitcoin"
												name="bitcoin" 
												value="bitcoin"/>
											<label htmlFor="choiceBitcoin" className='form-label-top'>Bitcoin</label>
										</div>
									</div>
								</div>
								<div className='form-section-wrap'>
									<div className='form-label-top'>Signature</div>
									<div className='form-line'>
										<div className='form-input-wrap-full'>
											<input
												id='fileUpload' 
												type='file' 
												multiple
											/>
										</div>
									</div>
								</div>
							</div>
							<div className='form-footer'>
								<button className='form-submit-button'>Submit</button>
							</div>
						</div>
					</div>
				</div>
			</div>
	)
}
