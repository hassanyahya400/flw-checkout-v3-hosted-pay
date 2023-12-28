import PaymentDetails from './pages/paymentDetails';
import './App.css'
import { convertQueryParamsToObject } from './helper/helper';
import StatusModal from './components/statusModal';

function App() {
  let txResponse = convertQueryParamsToObject(window.location.search);

  try 
  {
    txResponse = JSON.parse(txResponse.resp);
  }
  catch (e)
  {
    console.log(e.message);
    return (
      <PaymentDetails/>
    )
  }

  return (
    <>
      <StatusModal 
        status={txResponse.status}
        txRef={txResponse.data.txRef}
      />
      <PaymentDetails/>
    </>
  )
}

export default App
