import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ContextProvider} from "./Utils/Context.tsx";
import Home from "./pages/Home.tsx";
import Menu from "./pages/Menu.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import Careers from "./pages/Careers.tsx";
import Faq from "./pages/Faq.tsx";
import Order from "./pages/Order.tsx";
import Reservations from "./pages/Reservations.tsx";

const App = () => (
    <BrowserRouter>
        <ContextProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/order" element={<Order />} />
                <Route path="/reserve" element={<Reservations />} />
            </Routes>
        </ContextProvider>
    </BrowserRouter>
)

export default App;