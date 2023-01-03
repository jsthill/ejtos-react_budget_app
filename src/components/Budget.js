import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, expenses } = useContext(AppContext);
    const [budget, setBudget] = useState('');

    const updateBudget = (newBudget) => {

        dispatch({
            type: 'SET_BUDGET',
            payload: parseInt(newBudget),
        });

        setBudget(newBudget);
    }

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    // If budget is not set initialize it to 2000.
    useEffect(() => {
        let budgetAmt = 0;

        if (budget === "" || isNaN(budget)) {
            updateBudget("2000");
        }
    
        if (budget > 20000) {
            alert("The budget cannot exceed 20,000");
            budgetAmt = budget - (budget - 20000);
            updateBudget(budgetAmt);
            return;
        }

        if (budget !== "" && budget < totalExpenses) {
            alert("The budget cannot be less than the amount spent: " + totalExpenses);
            updateBudget(totalExpenses);
            return;
        }
    }, [budget, totalExpenses]);

    return (
        <div className='alert alert-secondary'>
            <span>Budget £ 
            <input
                required='required'
                type='number'
                id='budget'
                value={budget}
                style={{ marginLeft: '2rem' , size: 10, width: 80}}
                max="20000"
                step="10"
                onChange={(event) => updateBudget(event.target.value)}>
            </input>
            </span>
        </div>
    );
};

export default Budget;
