import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";

function App() {
  return (
    <>
      <Navbar cartCount={0} />
      <Banner />
      <Stats />
    </>
  );
}

export default App;
