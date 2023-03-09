import React, {useContext} from 'react';
import {AppContext} from  '../context/AppContext';

const Currency=()=>{
    const { dispatch, currency } = useContext(AppContext);

    const currencyChange = (val) =>{
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        });
    };

    return (
        <div className='alert alert-secondary'>
            <span>Currency:</span>
         {
      <select name="Currency" value={currency} onChange={event=>currencyChange(event.target.value)}>
        <option value="£">Uk(£)</option>
        <option value="₹">India(₹)</option>
        <option value="€">Europe(€)</option>
        <option value="CAD">Canada(CAD)</option>
      </select>	
}
        </div>
    );
};

export default Currency;