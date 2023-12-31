import PropTypes from 'prop-types';
import { useState } from "react";

const StatusModal = ({status, txRef, }) => {
    const [ isHidden, setIsHidden ] = useState(false);
    const statusMessage = {
        success: "Transaction completed successfully",
        successful: "Transaction completed successfully",
        completed: "Transaction completed successfully",
        failed: "Transaction failed",
    }

    return ( 
        <div tabIndex="-1" className={`bg-gray-50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-.5rem)] max-h-full ${isHidden && 'hidden'}`}>
            <div className="relative p-4 mx-auto w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow">
                    <button type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" onClick={() => setIsHidden(true)}>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="p-4 md:p-5 text-center">
                        <svg className="mx-auto mb-4 text-gray-400 w-12 h-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                        </svg>
                        <h3 className="mb-5 text-lg font-normal text-gray-400">{txRef}</h3>
                        <h3 className={`mb-5 text-md font-normal ${status == "failed" ? 'text-red-500' : 'text-gray-500'}`}>{statusMessage[status]}</h3>
                        <button type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10" onClick={() => setIsHidden(true)}>New Payment</button>
                    </div>
                </div>
            </div>
        </div>
     );
}

StatusModal.propTypes = {
    status: PropTypes.string,
    txRef: PropTypes.string,
}
 
export default StatusModal;