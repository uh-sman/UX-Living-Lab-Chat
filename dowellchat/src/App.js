import logo from './logo.svg';
import './App.css';
import MainPage from './main-page/main';
import Products from './products/ProductsList';


function App() {
  return (
    <div className="App">
      <MainPage />
      <Products />
    </div>
  );
}

export default App;
