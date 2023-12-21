import PaymentDetails from './pages/paymentDetails';
import './App.css'
import SuccessAlert from './components/successAlert';
import FailureAlert from './components/failureAlert';

function App() {
  const searchParams = new URLSearchParams(document.location.search);
  const queryParams = {
    id: searchParams.get("id"),
    tx_ref : searchParams.get("tx_ref"),
    status: searchParams.get("status"),
  }



  return (
    <>
      <div>
        {
          queryParams.status == "successful" && <SuccessAlert/>
        }
        {
          queryParams.status == "failed" && <FailureAlert/>
        }
      </div>
      <PaymentDetails/>
    </>
  )
}

export default App
