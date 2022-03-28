import './App.css';
import Login from './Components/logIn/login'
import CreateAccount from './Components/create-account/createAcc'
import Otp from './Components/OTP/otp';
import CreateAllcards from './Components/all-cards/create-all-cards';

function App() {
  return (
    <>
      <Login />
      <CreateAccount />
      <Otp />
      <CreateAllcards />
    </>
  );
}

export default App;


