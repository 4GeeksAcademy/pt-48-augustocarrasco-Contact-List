import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";


export const Home = () => {
	const [agendaName, setAgendaName] = useState([]);
	const { actions } = useContext(Context);
	const navigate = useNavigate();


	useEffect(() => {
	}, []);

	const goToAgendaList = () => {
		actions.setAgenda(agendaName);
		setAgendaName('');
		navigate('/home')
	}

	const deleteAgenda = () => {
		const agendaToDelete = prompt('Enter Agenda Name/Slug to be deleted: ')
		if (agendaToDelete === null) {
			return;
		}
		actions.deleteAgenda(agendaToDelete);
	}

	return (<>
		<div className="text-center mt-5 bg-dark d-flex flex-column justify-content-between align-items-center">
			<h1 className='text-light'>Welcome to your contact app</h1>
			<div className="d-flex flex-column justify-content-between align-items-center">
				<form className="d-flex flex-column justify-content-between align-items-center" onSubmit={goToAgendaList}>
					<label className='text-light m-3' htmlFor='agenda'>Enter agenda Name: <input type='text' id='agenda' required minLength='1' onChange={(event) => { setAgendaName(event.target.value) }}></input></label>
					<button type="submit" className="btn btn-success fw-bold">
						Go to the list
					</button>
				</form>
				<button type='button' className="btn btn-danger" onClick={deleteAgenda}>Delete An Agenda</button>
			</div>
		</div>
	</>);
}
