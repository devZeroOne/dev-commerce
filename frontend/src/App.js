import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Account from "./components/client/pages/account/Account";
import CartPage from "./components/client/pages/Cart/CartPage";
import Home from './components/client/pages/home/Home';
import ForgetPage from "./components/client/pages/login/ForgetPage";
import LoginPage from "./components/client/pages/login/LoginPage";
import ShopPage from "./components/client/pages/shopPage/ShopPage";
import Checkout from "./components/client/pages/checkoutpage/Checkout";
import MainDeshboard from "./components/admin/MainDeshboard";
import ResentNewPassPage from "./components/client/pages/login/ResentNewPassPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/forgetPassword" element={<ForgetPage />}/>
          <Route path="/cart" element={<CartPage />}/>
          <Route path="/cart" element={<CartPage />}/>
          <Route path="/shop" element={<ShopPage />}/>
          <Route path="/checkout" element={<Checkout />}/>
          <Route path="/admin" element={<MainDeshboard />}/>
          <Route path="/password/reset/:resetToken" element={<ResentNewPassPage />}/>
          <Route path="/admin/:adminPage" element={<MainDeshboard />}/>
          <Route path="/account/:accountPages" element={<Account/>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;