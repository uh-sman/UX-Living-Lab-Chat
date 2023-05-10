import logo from "./logo.svg";
import "./App.css";
import MainPage from "./main-page/main";
import Products from "./products/ProductsList";
import Navbar from "./navbar/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainPage />
      <Products />
      <p>Testing</p>
    </div>
  );
}

export default App;
