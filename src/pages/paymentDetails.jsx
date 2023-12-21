import AmountCurrencyInput from "../components/amountCurrenctInput";
import Input from "../components/input";
import Spinner from "../components/spinner";
import { useState } from "react";
import { useFormik } from "formik";
import { environments } from "../../data";
import { getEnvironmentData } from "../services/environmentDataService";
import { generateCheckoutURL } from "../helper/helper";

const PaymentDetails = () => {
    const [ isLoading, setIsLoading ] = useState(false);
    const [ currentEnvironment, setCurrentEnvironment ] = useState("Staging");
    const [ hideSubmit, setHideSubmit ] = useState(false);
    const [ checkoutURL, setCheckoutURL ] = useState(null);

    const environmentData = getEnvironmentData(currentEnvironment);

    const handleEnvironment = (environment) => {
        setHideSubmit(false);
        setCurrentEnvironment(environment);
    }
  
    const formik = useFormik({
        initialValues: {
            amount: "100",
            currency: "NGN",
            firstName: "HASSAN",
            lastName: "YAHYA",
            phonenumber: "080123456789",
            email: "HASSAN.YAHYA@FLUTTERWAVE.COM",
        }, 

        onSubmit: async (values) => {
            try 
            {
                setIsLoading(true);
                setCheckoutURL(generateCheckoutURL(environmentData, values));
            }
            catch (error)
            {
                console.log(error)
            }
            finally
            {
                setTimeout(() => {
                    setIsLoading(false)
                    setHideSubmit(true);
                }, 1100);
            }
        }
    });

    return ( 
        <main className="w-full flex bg-slate-50">
            <div className="flex-1 flex items-center justify-center h-screen">
                <div className="w-full max-w-md space-y-6 px-4  text-gray-600 sm:px-0">
                    <div className="mt-5 space-y-2 text-center">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Hosted pay</h3>
                        <p className="">Select an environment</p>
                    </div>
                    <div className="grid grid-cols-3 gap-x-3">
                        {
                            environments.map(environment => {
                                return (
                                    <button 
                                        key={environment} 
                                        onClick={() => handleEnvironment(environment)}
                                        className={`flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100 ${environment == currentEnvironment ? 'border-indigo-600 text-indigo-600' : ''}`} >
                                        {environment}
                                    </button>
                                )
                            })
                        }
                        
                    </div>
                    <div className="relative">
                        <span className="block w-full h-px bg-gray-300"></span>
                        <p className="inline-block w-fit text-sm bg-slate-50 px-2 absolute -top-2 inset-x-0 mx-auto">Enter your payment details</p>
                    </div>
                    <form
                        onSubmit={formik.handleSubmit}
                        className="space-y-5"
                    >
                        <AmountCurrencyInput
                            amountValue={formik.values.amount}
                            onAmountChange={formik.handleChange}
                            currencyValue={formik.values.currency}
                            onCurrencyChange={formik.handleChange}
                            required
                        />
                        <Input 
                            name="firstName"
                            label="First name"
                            type="text"
                            required
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                        />
                        <Input 
                            name="lastName"
                            label="Last name"
                            type="text"
                            required
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                        />
                        <Input 
                            name="phonenumber"
                            label="Phone"
                            type="number"
                            required
                            value={formik.values.phonenumber}
                            onChange={formik.handleChange}
                        />
                        <Input 
                            name="email"
                            label="Email"
                            type="email"
                            required
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                        
                        { !hideSubmit ? 
                        <button
                            type="submit"
                            className="w-full mt-6 px-3 py-3 cursor-pointer text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                        >
                            {isLoading? <Spinner/> : "Pay with Flutterwave"}
                        </button>
                        : 
                        <a  
                            href={checkoutURL}
                            onClick={() => setIsLoading(true)}
                            className="w-full mt-6 px-3 py-3 inline-block cursor-pointer text-white text-center font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                        >
                            {isLoading? <Spinner/> : "Proceed"}
                        </a> }
                    </form>
                </div>
            </div>
        </main>
     );
}
export default PaymentDetails;