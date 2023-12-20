import PropTypes from 'prop-types';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';

const PayButton = ({config}) =>  {
  const fwConfig = {
    ...config,
    text: 'Pay with Flutterwave!',
    callback: (response) => {
       console.log(response);
      closePaymentModal() // this will close the modal programmatically
    },
    onClose: () => {},
  };

  return (
    <FlutterWaveButton {...fwConfig} />
  );
}

PayButton.propTypes = {
  config: PropTypes.object
}
export default PayButton;