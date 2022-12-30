import React, { useContext, useState } from 'react';
// import { AppContext } from '../context/AppContext';

const Budget = () => {
    // const { budget } = useContext(AppContext);
    const [budget, setBudget] = useState('');
    let budgetAmt = 0;

    // If budget is not set initialize it to 2000.
    if (budget === "" || isNaN(budget)) {
        setBudget("2000");
    }

    if (budget > 20000) {
        alert("The budget cannot exceed 20,000");
        budgetAmt = budget - (budget - 20000);
        setBudget(budgetAmt);
        return;
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget £ 
            <input
                required='required'
                type='number'
                id='budget'
                value={budget}
                style={{ marginLeft: '2rem' , size: 10}}
                max="20000"
                step="10"
                onChange={(event) => setBudget(event.target.value)}>
            </input>
            </span>
        </div>
    );
};

export default Budget;
