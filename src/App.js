import { Route, Routes } from "react-router-dom";
import { AddNews, EditNews, Main, Navbar, News, SinglePage } from "./components";

const App = () => {
	return (
		<div className="container">
			<Navbar />

			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/news" element={<News />} />
				<Route path="/add-news" element={<AddNews />} />
				<Route path="/news/:id" element={<SinglePage />} />
				<Route path="/edit-news/:id" element={<EditNews />} />
			</Routes>
		</div>
	);
};

export default App;
