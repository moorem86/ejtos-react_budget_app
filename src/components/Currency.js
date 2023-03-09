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
        <div id="Currency" className='alert alert-secondary'> 
            <span>Currency ( </span>
      <select className='btn btn-success dropdown-toggle' menuPlacement="right" name="Currency" id="Currency" value={currency} onChange={event=>currencyChange(event.target.value)}>
        <option  value="$">$ Dollar</option>
        <option  value="£">£ Pound</option>
        <option value="€">€ Euro</option>
        <option  value="₹">₹ Ruppee</option>
      </select>	
           <span> )</span>
        </div>
    );
};

export default Currency;