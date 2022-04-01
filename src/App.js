import './App.css';
import Login from './Components/logIn/login'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import CreateAccount from './Components/create-account/createAcc'
// import Otp from './Components/OTP/otp';
// import CreateAllcards from './Components/all-cards/create-all-cards';
// import Reg from './Components/registration/index-reg';

function App() {
  const user = false ;
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={ <CreateAccount />} />
        <Route path="/login" element={ user ? <Navigate to = "/" /> : <Login />}/>
      </Routes>
      
      {/* <CreateAccount /> */}
      {/* <Otp /> */}
      {/* <CreateAllcards /> */}
      {/* <Reg /> */}
    </BrowserRouter>
  );
}

export default App;


