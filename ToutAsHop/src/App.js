import { Routes, Route, useNavigate, createSearchParams } from "react-router-dom"
import { NavBar } from "./components/navbar"
import { Products } from "./pages/products/js/products"
import { Product } from "./pages/product"
import { Cart } from "./pages/cart"
import { NotFound } from "./pages/not-found"
import Confirmer from "./pages/confirmer/Confirmer"
import { useCart } from './context/cart'
import Login from "./pages/LOgin/Login";
import Dashboard from './Page/Dashboard';
import Offers from "./pages/offers/Offers"
import Cong from "./pages/Home/js/Cong"




function App() {

  const navigate = useNavigate();
  const { cartItemCount } = useCart()

  const onSearch = (searchQuery) => {
    navigate(`/?${createSearchParams({ q: searchQuery })}`)
  }

  return (
    <>
      <NavBar onSearch={onSearch} cartItemCount={cartItemCount()} />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/confirmer" element={<Confirmer />} />
        <Route path="/con" element={<Cong/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/offers" element={<Offers/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
