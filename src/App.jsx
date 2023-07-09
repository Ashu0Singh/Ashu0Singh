import React from "react";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import Services from "./components/services/services";
import Portfolio from "./components/portfolio/portfolio";
import Contacts from "./components/contacts/contacts";
import Footer from "./components/footer/footer";
import { Toaster } from "react-hot-toast";

const App = () => {
	return (
		<>
			<Toaster position="top-center" />
			<Header />
			<Nav />
			<Portfolio />
			<Services />
			<Contacts />
			<Footer />
		</>
	);
};

export default App;
