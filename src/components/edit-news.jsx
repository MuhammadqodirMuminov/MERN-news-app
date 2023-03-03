import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditNews = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [title, setTitle] = useState();
	const [subtitle, setSubtitle] = useState();

	const getSingleCard = () => {
		fetch(`/edit-news/${id}`)
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
			})
			.then((data) => {
				setTitle(data.title);
				setSubtitle(data.description);
			});
	};

	useEffect(() => {
		getSingleCard();
	}, []);

	const submitHandler = (e) => {
		e.preventDefault();

		const editNews = { title, description: subtitle };

		axios.post(`http://localhost:4100/edit-news/${id}`, editNews);

		setTitle("");
		setSubtitle("");

		navigate("/");
	};

	return (
		<form
			onSubmit={submitHandler}
			className="w-75 mx-auto d-flex flex-column gap-4">
			<h1 className="text-center">Edit News</h1>

			<div className="mb-3">
				<label htmlFor="exampleFormControlInput1" className="form-label">
					Title
				</label>
				<input
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					type="text"
					className="form-control"
					id="exampleFormControlInput1"
					placeholder="Title"
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="exampleFormControlTextarea1" className="form-label">
					Example textarea
				</label>
				<textarea
					value={subtitle}
					onChange={(e) => setSubtitle(e.target.value)}
					className="form-control"
					id="exampleFormControlTextarea1"
					rows="3"></textarea>
			</div>
			<button className="btn btn-outline-info">Edit</button>
		</form>
	);
};

export default EditNews;
