import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import ProductsSection from "./components/ProductsSection";
import productsData from "./data/products";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StepsSection from "./components/StepsSection";

function App() {
  const [activeTab, setActiveTab] = useState("products");
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      toast.warning("Already added to cart!");
      return;
    }

    setCart([...cart, product]);
    toast.success("Added to cart!");
  };

  const handleRemoveFromCart = (id) => {
    const remainingCart = cart.filter((item) => item.id !== id);
    setCart(remainingCart);

    toast.error("Item removed from cart!");
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.warning("Cart is empty!");
      return;
    }

    setCart([]);
    toast.success("Payment successful!");
  };

  return (
    <div className="bg-[#F8F8F8] min-h-screen">
      <Navbar cart={cart} />
      <Banner />
      <Stats />

      <ProductsSection
        products={productsData}
        cart={cart}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        handleAddToCart={handleAddToCart}
        handleRemoveFromCart={handleRemoveFromCart}
        handleCheckout={handleCheckout}
      />

      <ToastContainer position="top-right" autoClose={2000} theme="colored" />
      <StepsSection />
    </div>
  );
}

export default App;
