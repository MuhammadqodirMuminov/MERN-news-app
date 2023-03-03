import { useEffect, useState } from "react";
import { Thumbnail } from "../assets/images";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Main = () => {
	const [news, setNews] = useState([]);
	const navigate = useNavigate();

	const getData = async () => {
		fetch("/news")
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
			})
			.then((data) => setNews(data));
	};

	const viewHandler = (id) => {
		axios.get(`/news/${id}`);
		navigate(`/news/${id}`);
	};

	const editHandler = (id) => {
		axios.get(`/edit-news/${id}`);
		navigate(`/edit-news/${id}`);
	};

	const deleteHandler = (id) => {
		axios.get(`/delete-news/${id}`);
		navigate("/news");
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-3">
			{news?.map((item, i) => (
				<div key={i} className="col">
					<div className="card shadow-sm">
						<Thumbnail />
						<div
							style={{
								height: "168px",
								overflowX: "hidden",
								overflowY: "scroll",
							}}
							className="card-body">
							<p className="card-text">{item.description}</p>
						</div>
						<div className="card-footer p-3">
							<div className="d-flex justify-content-between align-items-center">
								<div className="btn-group">
									<button
										onClick={() => viewHandler(item._id)}
										type="button"
										className="btn btn-sm btn-outline-primary">
										View
									</button>
									<button
										onClick={() => editHandler(item._id)}
										type="button"
										className="btn btn-sm btn-outline-secondary">
										Edit
									</button>
									<button
										onClick={() => deleteHandler(item._id)}
										type="button"
										className="btn btn-sm btn-outline-danger">
										Delete
									</button>
								</div>
								<small className="text-muted">
									{moment(item.createdAt).format("DD MMM, YYYY")}
								</small>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Main;
