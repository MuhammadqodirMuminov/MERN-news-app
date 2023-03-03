import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddNews = () => {
	const [title, setTitle] = useState("");
	const [subtitle, setSubtitle] = useState("");
	const navigate = useNavigate();

	const submitHandler = (e) => {
		e.preventDefault();

		const newNews = { title, description: subtitle };

		axios.post("http://localhost:4100/createNews", newNews);

		setTitle("");
		setSubtitle("");

		navigate("/");
	};

	return (
		<form
			onSubmit={submitHandler}
			className="w-75 mx-auto d-flex flex-column gap-4">
			<h1 className="text-center">Add News</h1>

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
			<button className="btn btn-outline-info">Add</button>
		</form>
	);
};

export default AddNews;
