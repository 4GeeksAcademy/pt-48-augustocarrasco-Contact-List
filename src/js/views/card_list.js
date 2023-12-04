import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const CardList = () => {
	const { store, actions } = useContext(Context);
	const [loadingState, setLoadingState] = useState(true)

	useEffect(() => {
		const loadData = async () => {
			const contact_list = await actions.getContactsFromAgenda();
			actions.setContactlist(contact_list);
		}
		loadData();
		setLoadingState(false);
	}, []);

	return (
		<div className="container w-100 v-100 d-flex flex-column justify-content-center align-items-center mt-5">
			<div className="col-10 d-flex flex-row flex-wrap justify-content-start align-items-center  gap-5">
				{!loadingState && store.contact_list.map((contact) => {
					return (
						<div className="card mb-3 bg-secondary text-light border" style={{ 'maxWidth': '540px', 'minWidth': '400px' }} key={contact.id}>
							<div className="row g-0">
								<div className="col-md-4">
									<img src={`https://picsum.photos/200/300?random=${contact.id}`} className="img-fluid rounded-start" alt="contact_image" />
								</div>
								<div className="col-md-8">
									<div className="card-body">
										<h5 className="card-title">{contact.full_name}</h5>
										{/* <p className="card-text">{contact.email} </p>
										<p className="card-text">{contact.address} </p>
										<p className="card-text">{contact.phone} </p> */}
										<Link to={`/single/${contact.id}`} className=" text-end">
											<button className="btn btn-light text-end">Details</button>
										</Link>
									</div>
								</div>
							</div>
						</div>
					)
				})}
			</div>
			<br />
			<div className="col-10 d-flex flex-row justify-content-around">
				<Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link>
				<Link to="/new">
					<button className="btn btn-primary fw-bold">Add Contact</button>
				</Link>
			</div>
		</div>
	);
};
