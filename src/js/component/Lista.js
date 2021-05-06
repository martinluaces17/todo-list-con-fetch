import React, { useState } from "react";

const Lista = () => {
	const [tarea, setTarea] = useState("");
	const [listaTareas, setListaTareas] = useState([]);

	const agregarTarea = event => {
		event.preventDefault();
		setListaTareas([...listaTareas, tarea]);
		setTarea("");
	};

	return (
		<div className="container">
			<h1 className="display-1">todo list</h1>
			<form onSubmit={agregarTarea}>
				<div className="form-row align-items-center">
					<div className="col-auto">
						<input
							type="text"
							className="form-control mb-2"
							id="inlineFormInput"
							placeholder="Agregar nueva tarea"
							onChange={event => setTarea(event.target.value)}
							value={tarea}
						/>
					</div>
					<div className="col-auto">
						<button type="submit" className="btn btn-primary mb-2">
							<i className="fas fa-plus"></i>
						</button>
					</div>
				</div>
			</form>
			<div className="lista">
				<ul>
					{listaTareas.map((element, index) => {
						return <li key={index}>{element}</li>;
					})}
				</ul>
			</div>
			<div>
				<h5>hay {listaTareas.length} tareas</h5>
			</div>
		</div>
	);
};

export default Lista;
