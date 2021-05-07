import React, { useState } from "react";

const Lista = () => {
	const [tarea, setTarea] = useState("");
	const [listaTareas, setListaTareas] = useState([]);
	const [mouse, setMouse] = useState();

	const agregarTarea = event => {
		event.preventDefault();
		setListaTareas([...listaTareas, tarea]);
		setTarea("");
	};

	const eliminarTarea = index => {
		let nuevaLista = listaTareas.filter((elem, i) => {
			{
				if (i != index) {
					return elem;
				}
			}
		});
		setListaTareas(nuevaLista);
	};

	const mouseOver = index => {
		setMouse(index);
	};

	return (
		<div className="container">
			<h1 className="display-1">todo list</h1>
			<form onSubmit={agregarTarea}>
				<div className="content center">
					<div className="col-auto">
						<input
							type="text"
							className="form-control mb-2 display-4"
							id="inlineFormInput"
							placeholder="Agregar nueva tarea"
							onChange={event => setTarea(event.target.value)}
							value={tarea}
						/>
					</div>
					<div className="col-auto">
						<button type="submit" className="btn btn-primary mb-2">
							<i className="fas fa-plus" />
						</button>
					</div>
				</div>
			</form>
			<div className="list-group list-group-flush">
				<ul className="list-group-item text-left">
					{listaTareas.map((element, index) => {
						return (
							<div
								key={index}
								onMouseOver={() => {
									mouseOver(index);
								}}
								onClick={() => {
									eliminarTarea(index);
								}}>
								{element}
								<i
									type="button"
									className={
										"far fa-trash-alt" +
										(mouse == index ? "" : " invisible")
									}
								/>
							</div>
						);
					})}
				</ul>
			</div>
			<div>
				<h6 className="display-6">Hay {listaTareas.length} tareas</h6>
			</div>
		</div>
	);
};

export default Lista;
