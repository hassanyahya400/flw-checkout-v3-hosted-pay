export const generateReference = (length) => {
    let reference = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        reference += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return "HSN-" + reference;
}

export const generateCheckoutURL = (environmentData, paymentData) => {
    return `${environmentData.checkout_url}/?PBFPubKey=${environmentData.public_key}&txref=${generateReference(11)}&currency=${paymentData.currency}&customer_email=${paymentData.email}&amount=${paymentData.amount}&customer_phone=${paymentData.phonenumber}&payment_options=card,account,ussd,banktransfer,qr,barter,alipay,mpesa,mobilemoney,payattitude,1voucher,mobilemoney,card,ussd,mpesa,paga,internetbanking,nqr&customer_fullname=${paymentData.firstName}+${paymentData.lastName}&redirect_url=${import.meta.env.VITE_APP_BASE_URL}`
}

export const queryParamsToObject = (queryParamString) => {
    try {
      // First, decode the URI-encoded parts of the string:
      const decodedString = decodeURIComponent(queryParamString);
  
      // Then, parse the string as a JSON object, handling potential errors:
      const parsedObject = JSON.parse(decodedString);
  
      return parsedObject;
    } catch (error) {
      console.error("Error parsing query param string:", error);
      return null; // Or handle the error differently as needed
    }
}

export const isNotNull = (value) => {
    return value !== null;
}