import { useEffect, useState } from "react";
import { Thumbnail } from "../assets/images";

const News = () => {
	const [news, setNews] = useState([]);

	const getData = async () => {
		fetch("/news")
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
			})
			.then((data) => setNews(data));
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
						<div className="card-body">
							<h3 className="fw-bold">{item.title}</h3>
							<p className="card-text">{item.description}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default News;
