import React from 'react';
import RentImg from '../../assets/images/rent.jpg'
import FirstKeyImg from '../../assets/images/first-key.png'
import { FullName } from '../../components/FullName';
import { Email } from '../../components/Email';
import { PhoneNumber } from '../../components/PhoneNumber';
import { Address } from '../../components/Address';
import { Employment } from '../../components/Employment';
import { PreferredDate } from '../../components/PreferredDate';
import { ResidentAddress } from '../../components/ResidentAddress';
import { FloorPlan } from '../../components/FloorPlan';
import { QA } from '../../components/QA';
import { Government } from '../../components/Government';
import { PaymentMethod } from '../../components/PaymentMethod';
import { Signature } from '../../components/Signature';

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
								<PreferredDate/>
								<ResidentAddress/>
								<FloorPlan/>
								<QA/>
								<Government/>
								<PaymentMethod/>
								<Signature/>
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
