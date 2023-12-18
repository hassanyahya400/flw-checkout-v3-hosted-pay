import AmountInput from "../components/amountInput";
import Input from "../components/input";
import Spinner from "../components/spinner";
import { useFormik } from "formik";
import { environments } from "../../data";
import { useState } from "react";
import { getEnvironmentData } from "../services/environmentDataService";
import { generateReference, isNotNull } from "../helper/helper";
import HttpService from "../services/httpService";

const PaymentDetails = () => {
    const [ isLoading, setIsloading ] = useState(false);
    const [ currentEnvironment, setCurrentEnvironment ] = useState("Staging");
    const [ hostedLink, setHostedLink ] = useState(null);
    

    const formik = useFormik({
        initialValues: {
            firstName: "HASSAN",
            lastName: "YAHYA",
            email: "HASSAN.YAHYA@FLUTTERWAVE.COM",
            currency: "NGN",
            amount: "100",
            phonenumber: "080123456789"
        }, 
        onSubmit: async (values) => {
            const environmentData = getEnvironmentData(currentEnvironment);
            const data = {
                tx_ref: generateReference(10),
                amount: values.amount,
                currency: values.currency,
                redirect_url: "https:flutterwave.com/",
                customer: {
                    email: values.email,
                    phonenumber: values.phonenumber,
                    name: `${values.firstName} ${values.lastName}`
                },
            }

            console.log(environmentData);
            
            const HostedPage = new HttpService(environmentData.api_base_url);
            try {
                setIsloading(true);
                setHostedLink("https://checkout-testing.herokuapp.com/v3/hosted/pay/flwlnk-01hhz8axg5bdzre41xnd8qktwe");
                const res = await HostedPage.post(
                    "/v3/payments", 
                    data, 
                    {
                        "Authorization": `Bearer ${environmentData.secret_key}`,
                        "Content-Type": "application/json",
                        "Accept": "*/*"
                    }
                )
                console.log(res);
            }
            catch (error)
            {
                console.log(error)
            }
            finally
            {
                setTimeout(() => setIsloading(false), 2000);
            }
        }
    });

    return ( 
        <main className="w-full flex bg-slate-50">
            <div className="flex-1 flex items-center justify-center h-screen">
                <div className="w-full max-w-md space-y-8 px-4  text-gray-600 sm:px-0">
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
                                        onClick={() => setCurrentEnvironment(environment)}
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
                        <AmountInput
                            amountValue={formik.values.amount}
                            onAmountChange={formik.handleChange}
                            currencyValue={formik.values.currency}
                            onCurrencyChange={formik.handleChange}
                        />
                        <Input 
                            name="firstName"
                            label="First name"
                            type="text"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                        />
                        <Input 
                            name="lastName"
                            label="Last name"
                            type="text"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                        />
                        <Input 
                            name="email"
                            label="Email"
                            type="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                        
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                        >
                            {
                                isLoading ? <Spinner /> : "Pay 💰"
                            }
                        </button>
                        <div>
                            {
                                isNotNull(hostedLink) && <button
                                type="submit"
                                className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                            >proceed</button>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </main>
     );
}
 
export default PaymentDetails;