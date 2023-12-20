import PropTypes from 'prop-types';

const Input = ({ placeholder, label, type, value, ...rest }) => {
    return (
        <div>
            <label className="font-medium">
                {label}
            </label>
            <input
                placeholder={placeholder}
                type={type}
                value={value}
                className="w-full mt-1 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                {...rest}
            />
        </div>
    );
}

Input.propTypes = {
    placeholder: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string
}
 
export default Input;