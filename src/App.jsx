import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import ProductsSection from "./components/ProductsSection";
import productsData from "./data/products";

function App() {
  const [activeTab, setActiveTab] = useState("products");
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);

    if (exists) return;

    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (id) => {
    const remainingCart = cart.filter((item) => item.id !== id);
    setCart(remainingCart);
  };

  const handleCheckout = () => {
    setCart([]);
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
    </div>
  );
}

export default App;