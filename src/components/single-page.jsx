import moment from "moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SinglePage = () => {
	const [state, setState] = useState("");
	const { id } = useParams();

	const getSingleCard = () => {
		fetch(`/news/${id}`)
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
			})
			.then((data) => setState(data));
	};

	useEffect(() => {
		getSingleCard();
	}, []);

	return (
		<div className="d-flex flex-column gap-4">
			<img className="w-100" src="https://picsum.photos/300/100" alt="" />
			<h1>About News</h1>
			<h2>{state.title}</h2>
			<p className="text-muted">{state.description}</p>
			<p className="text-muted">
				Date : {moment(state.createdAt).format("DD MM YYYY")}
			</p>
		</div>
	);
};

export default SinglePage;
