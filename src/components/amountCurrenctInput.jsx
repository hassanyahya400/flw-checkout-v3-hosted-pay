import PropTypes from 'prop-types';
import { currencies } from '../../data';
// import { useState } from 'react';
// import HttpService from '../../services/httpService';


const AmountCurrencyInput = ({ amountValue, onAmountChange, currencyValue, onCurrencyChange, ...rest}) => {
    // const [ currencySymbol, setCurrencySymbol ] = useState("₦");
    
    
    return (
        <div>
                <label className="text-gray-600">
                    Amount
                </label>
                <div className="relative mt-1 text-gray-500">
                    <span className="h-6 text-gray-400 absolute left-3 inset-y-0 my-auto">
                        ₦
                    </span>
                    <input
                        name="amount"
                        type="number"
                        placeholder="0.00"
                        value={amountValue}
                        onChange={onAmountChange}
                        className="w-full pl-8 pr-16 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        {...rest}
                    />
                    <div className="absolute inset-y-0 right-3 flex items-center">
                        <select 
                            name="currency" 
                            value={currencyValue} 
                            onChange={onCurrencyChange}
                            className="text-sm bg-transparent outline-none px-1 rounded-lg h-full"
                            {...rest}
                        >
                            {
                                currencies.map( (currency, idx) => 
                                <option key={idx + currency.name} value={currency.code}>{currency.code}</option>
                                )
                            }
                        </select>
                    </div>
                </div>
        </div>
    )
}
 
AmountCurrencyInput.propTypes = {
    amountValue: PropTypes.string,
    onAmountChange: PropTypes.func,
    currencyValue: PropTypes.string,
    onCurrencyChange: PropTypes.func,
    
}

export default AmountCurrencyInput;
