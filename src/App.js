import "./reset.css";
import "./index.css";
import "./App.css";
import "../src/components/common/login.css"
import "../src/components/common/DarkMode.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import About from "./components/pages/About";
import Contacts from "./components/pages/Contacts";
import Gallery from "./components/pages/Gallery";
import Footer from "./components/pages/Footer";
import Services from "./components/pages/Services";
import Projects from "./components/pages/Projects";
import Participation from "./components/pages/Participation";
import Throwback from "./components/pages/Throwback";
import Canvas from "./components/pages/Canvas";
import Privacy from "./components/pages/Privacy";
import Arte from "./components/pages/Arte";
import TermsOfService from "./components/pages/TermsOfService";
import NotFound from "./components/pages/NotFound";
import NavbarLayout from "./components/common/NavbarLayout";
import Cart from "./components/common/Cart";
import Profile from "./components/common/Profile";
import Login from "./components/common/Login";
import Register from "./components/common/Register";

function App() {
	return (
		<BrowserRouter>

			<Routes>
				<Route path="/" element={<NavbarLayout/>}>
				<Route path="/" element={<Home />} />
				<Route path="loja" element={<Shop />} />
				<Route path="sobre" element={<About />} />
				<Route path="contatos" element={<Contacts />} />
				<Route path="galerias" element={<Gallery />} />
				<Route path="servicos" element={<Services />} />
				<Route path="projetos" element={<Projects />} />
				<Route path="participacoes" element={<Participation />} />
				<Route path="throwback" element={<Throwback />} />
				<Route path="tags" element={<Canvas />} />
				<Route path="privacidade" element={<Privacy />} />
				<Route path="termosdeservico" element={<TermsOfService />} />
				<Route path="arte" element={<Arte />} />
				<Route path="cart" element={<Cart/>} />
				<Route path="login" element={<Login/>} />
				<Route path="register" element={<Register/>} />
				<Route path="profile" element={<Profile/>} />
				<Route path="*" element={<NotFound />} />
			</Route>
			</Routes>
			<Footer/>
		</BrowserRouter>

	);
}
export default App;