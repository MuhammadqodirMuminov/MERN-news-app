import { Link } from "react-router-dom";
import { Logo } from "../assets/images";

const Navbar = () => {
	return (
		<div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom mt-4">
			<Link
				to={'/'}
				className="d-flex align-items-center text-dark text-decoration-none">
				<Logo />
				<span className="fs-4">BBC | News</span>
			</Link>

			<nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
				<Link
					className="me-3 py-2 text-dark text-decoration-none"
					to={"/news"}>
					News
				</Link>

				<Link
					className="me-3 py-2 text-dark text-decoration-none"
					to={"/add-news"}>
					Add News
				</Link>
			</nav>
		</div>
	);
};

export default Navbar;
