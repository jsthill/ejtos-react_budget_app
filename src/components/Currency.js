import React, { useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const [currency, setCurrency] = useState('£');

    return (
        <div className='alert alert-success'>
            <span>
                <select className="custom-select" id="inputGroupCurrency" onChange={(event) => setCurrency(event.target.value)}>
                    <option defaultValue>Pound</option>
                    <option value="Dollar" name="dollar">$ Dollar</option>
                    <option value="Pound" name="pound">£ Pound</option>
                    <option value="Euro" name="euro">€ Euro</option>
                    <option value="Ruppee" name="ruppee">₹ Ruppee</option>
                </select>
            </span>
        </div>
    );
};

export default Currency;