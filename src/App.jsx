import React from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const App = () => {
	return (
		<>
			<Toaster position="top-center" />
			<Header />
			<Nav />
			<Portfolio />
			<Contacts />
			<Footer />
		</>
	);
};

export default App;
