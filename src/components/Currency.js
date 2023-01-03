import React, { useState } from 'react';
import "./Currency.css"
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const [currency, setCurrency] = useState('£ Pound');

    return (
        <div className='alert alert-success'>
            <label for="inputGroupCurrency">Currenct ({currency})
                <select className="dropdown-content" id="inputGroupCurrency" onChange={(event) => setCurrency(event.target.value)}>
                    <option value="$ Dollar" name="dollar">$ Dollar</option>
                    <option value="£ Pound" name="pound" selected>£ Pound</option>
                    <option value="€ Euro" name="euro">€ Euro</option>
                    <option value="₹ Ruppee" name="ruppee">₹ Ruppee</option>
                </select>
            </label>
        </div>
    );
};

export default Currency;