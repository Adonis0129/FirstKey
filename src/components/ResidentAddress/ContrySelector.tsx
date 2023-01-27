import { useState } from 'react';
import { CountryDropdown } from 'react-country-region-selector';
import '../../assets/styles/style.scss';

export const CountrySelctor = () => {
    const [country, setCountry] = useState('');

    return (
        <>
            <CountryDropdown
                classes='form-input'
                value={country}
                onChange={(val) => setCountry(val)} 
            />
        </>
    )
}