import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

function App() {
  return (
    <>
      <Navbar cartCount={0} />
      <Banner />
    </>
  );
}

export default App;
