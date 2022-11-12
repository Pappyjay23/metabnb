import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from './pages/Home'
import PlaceToStay from "./pages/PlaceToStay";

const App = () => {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/placeToStay' element={<PlaceToStay />} />
				</Routes>
				<Footer />
			</Router>
		</>
	);
};

export default App;
