import "./App.css";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Container from "./container";
import Footer from "./container/Footer";
import { AppProvider } from "./container/ContextProvider/DataContext";
import Navbar from "./container/Header/Navbar";
import DetailsSection from "./container/Details/DetailsSection";
function App() {
  return (
    <AppProvider>
      <div className="">
        {/* <Navbar /> */}
        <div className=" container w-full d-flex justify-content-start justify-content-md-start  flex-1 gap-5">
          <div
          // style={{ width: "100%" }}
          >
            <Container />
          </div>
          <DetailsSection />
        </div>
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
// justify-content-lg-between justify-content-xl-between justify-content-xxl-between
