import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, expenses, currency } = useContext(AppContext);

    const setBudget=(val)=>{
        const totalExpenses = expenses.reduce((total, item) => {
                return (total += item.cost);
            }, 0);
        
        if(val<totalExpenses) {
			alert("You cannot reduce the budget lower than the spending!");
		} 
        if(val>20000) {
			alert("You cannot increase the budget more than 20,000!");
		} else {
			dispatch({
				type: 'SET_BUDGET',
				payload: val,
			})
			}
	

    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input 
            type='number'
            value={budget}
            defaultValue={budget}
            step='10'
            onChange={(event) => setBudget(event.target.value)}
            ></input>
            
        </div>
    );
};
export default Budget;
