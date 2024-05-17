import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Footer from "./components/FooterSection/Footer";
import DownloadApp from "./components/DownloadApp/DownloadApp";

function App() {
  return (
    <div>
      <CssBaseline />
      <Outlet />
      <DownloadApp />
      <Footer />
    </div>
  );
}
export default App;
