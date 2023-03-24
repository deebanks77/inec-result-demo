import { Routes, Route } from "react-router-dom";
import PollingUnit from "./pages/PollingUnit";
import LocalGovermentResult from "./pages/LocalGovermentResult";
import Navbar from "./components/Navbar";
import NewPollingUnitResult from "./pages/NewPollingUnitResult";
import Error from "./pages/Error";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="inec-result-demo" index element={<PollingUnit />} />
        <Route path="localGoverment" element={<LocalGovermentResult />} />
        <Route path="newPollingUnit" element={<NewPollingUnitResult />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
