import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
	About,
	BlogPage,
	Contact,
	Footer,
	Header,
	Home,
	Page404,
	Product,
} from "./components/utils/helper";

import "./styles/main.css";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="blog-page" element={<BlogPage />} />
				<Route path="product" element={<Product />} />
				<Route path="contact" element={<Contact />} />
				<Route path="*" element={<Page404 />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
