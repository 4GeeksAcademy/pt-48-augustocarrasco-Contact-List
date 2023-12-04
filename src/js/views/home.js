import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Home = () => {
	const [agendaName, setAgendaName] = useState([]);
	const { actions } = useContext(Context);

	useEffect(() => {
	}, []);

	const goToAgendaList = () => {
		actions.setAgenda(agendaName);
		setAgendaName('');
	}

	const deleteAgenda = () => {
		actions.deleteAgenda(agendaName);
	}

	return (<>
		<div className="text-center mt-5 bg-dark d-flex flex-column justify-content-between align-items-center">
			<h1 className='text-light'>Welcome to your contact app</h1>
			<div className="d-flex flex-column justify-content-between align-items-center">
				<label className='text-light m-3' htmlFor='agenda'>Enter agenda Name: <input type='text' id='agenda' onChange={(event) => { setAgendaName(event.target.value) }}></input></label>
				<Link to="/home" className=" m-3">
					<p className="btn btn-success fw-bold" onClick={goToAgendaList}>
						Go to the list
					</p>
				</Link>
				<button className="btn btn-danger" onClick={deleteAgenda}>Delete Full Agenda</button>
			</div>
		</div>
	</>);
}
