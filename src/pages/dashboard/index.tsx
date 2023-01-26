import React from 'react';
import RentImg from '../../assets/images/rent.jpg'
import FirstKeyImg from '../../assets/images/first-key.png'
import { FullName } from '../../components/FullName';
import { Email } from '../../components/Email';
import { PhoneNumber } from '../../components/PhoneNumber';
import { PreferredData } from '../../components/PreferredData';
import { Address } from '../../components/Address';
import { Employment } from '../../components/Employment';
import { FloorPlan } from '../../components/FloorPlan';

import { DragDropFile } from '../../components/DragAndDrop';
import { Signature } from '../../components/Signature';
import { PaymentMethod } from '../../components/PaymentMethod';

import '../../assets/styles/style.scss';

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
								<FullName/>
								<Email/>
								<PhoneNumber/>
								<Address/>
								<Employment/>
								<PreferredData/>
								<Address/>
								<FloorPlan/>
								{/* How much do you have at hand now to secure the property? (USD) */}
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
								{/* Do you have pets? */}
								<div className='form-section-wrap'>
									<div className='form-label-top'>Do you have pets?</div>
									<div className=''>
										<div className='form-radio'>
											<input 
												type="radio" 
												id="choicePet1"
												name="pet" 
												value="yes"/>
											<label htmlFor="choicePet1" className='form-label-top'>Yes</label>
										</div>
										<div className='form-radio'>
											<input 
												type="radio" 
												id="choicePet2"
												name="pet" 
												value="no"/>
											<label htmlFor="choicePet2" className='form-label-top'>No</label>
										</div>
									</div>
								</div>
								{/* Please describe all pets */}
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
								{/* Have you ever been evicted? */}
								<div className='form-section-wrap'>
									<div className='form-label-top'>Have you ever been evicted?</div>
									<div className=''>
										<div className='form-radio'>
											<input 
												type="radio" 
												id="choiceEvict1"
												name="evict" 
												value="yes"/>
											<label htmlFor="choiceEvict1" className='form-label-top'>Yes</label>
										</div>
										<div className='form-radio'>
											<input 
												type="radio" 
												id="choiceEvict2"
												name="evict" 
												value="no"/>
											<label htmlFor="choiceEvict2" className='form-label-top'>No</label>
										</div>
									</div>
								</div>
								{/* Have you ever been convicted of a felony? */}
								<div className='form-section-wrap'>
									<div className='form-label-top'>Have you ever been convicted of a felony?</div>
									<div className=''>
										<div className='form-radio'>
											<input 
												type="radio" 
												id="choiceConvict1"
												name="convict" 
												value="yes"/>
											<label htmlFor="choiceConvict1" className='form-label-top'>Yes</label>
										</div>
										<div className='form-radio'>
											<input 
												type="radio" 
												id="choiceConvict2"
												name="convict" 
												value="no"/>
											<label htmlFor="choiceConvict2" className='form-label-top'>No</label>
										</div>
									</div>
								</div>
								{/* Have you ever declared bankruptcy? */}
								<div className='form-section-wrap'>
									<div className='form-label-top'>Have you ever declared bankruptcy?</div>
									<div className=''>
										<div className='form-radio'>
											<input 
												type="radio" 
												id="choiceBankruptcy1"
												name="bankruptcy" 
												value="yes"/>
											<label htmlFor="choiceBankruptcy1" className='form-label-top'>Yes</label>
										</div>
										<div className='form-radio'>
											<input 
												type="radio" 
												id="choiceBankruptcy2"
												name="bankruptcy" 
												value="no"/>
											<label htmlFor="choiceBankruptcy2" className='form-label-top'>No</label>
										</div>
									</div>
								</div>
								{/* Social Security Number (SSN) */}
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
								{/* Front Government ID */}
								<div className='form-section-wrap'>
									<div className='form-label-top'>Front Government ID</div>
									<div className='form-line'>
										<div className='form-input-wrap-full'>
											<DragDropFile/>
										</div>
									</div>
								</div>
								{/* Back Government ID */}
								<div className='form-section-wrap'>
									<div className='form-label-top'>Back Government ID</div>
									<div className='form-line'>
										<div className='form-input-wrap-full'>
											<DragDropFile/>
										</div>
									</div>
								</div>
								{/* Selfie */}
								<div className='form-section-wrap'>
									<div className='form-label-top'>Selfie</div>
									<div className='form-line'>
										<div className='form-input-wrap-full'>
											<DragDropFile/>
										</div>
									</div>
									<div className='form-line-selfie'>
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
								{/* Confirm */}
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
									<PaymentMethod/>
								{/* Signature */}
								<div className='form-section-wrap'>
									<div className='form-label-top'>Signature</div>
									<div className='form-line'>
										<div className='form-input-wrap-full'>
											<Signature/>
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
