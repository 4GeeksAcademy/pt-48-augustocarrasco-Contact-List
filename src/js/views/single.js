import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const navigate = useNavigate();
	const { store, actions } = useContext(Context);
	const [contact, setContact] = useState({});
	const [edittingstate, setEdittingState] = useState(false);
	const params = useParams();

	const saveUpdatedContact = () => {
		setEdittingState(false)
		actions.updateContact(contact);
	}
	const deleteContact = () => {
		actions.deleteContact(contact.id);
		navigate('/home')

	}

	useEffect(() => {
		// console.log(Number(params.contactid))
		const [contactFiltered] = store.contact_list.filter(contact => contact.id == Number(params.contactid))
		setContact(contactFiltered);
	}, []);
	return (<>
		<div className="col-12 d-flex h-auto align-items-center justify-content-center flex-column">
			{contact.id && <div className="jumbotron col-9 rounded-2 bg-secondary">
				<div className="card mb-3 bg-secondary text-light border" style={{ 'maxWidth': '100%', 'minWidth': '400px' }} key={contact.id}>
					<div className="row g-0">
						<div className="col-md-4">
							<img src={`https://picsum.photos/400/600?random=${contact.id}`} className="img-fluid rounded-start" alt="contact_image" />
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<form>
									<fieldset disabled={edittingstate ? false : true}>
										<legend>Detailed contact information</legend>
										<div className="mb-3">
											<label className="form-label">Full name</label>
											<input type="text" className="form-control" value={contact.full_name} onChange={(event) => { setContact({ ...contact, full_name: event.target.value }) }} />
										</div>
										<div className="mb-3">
											<label className="form-label">Email</label>
											<input type="text" className="form-control" value={contact.email} onChange={(event) => { setContact({ ...contact, email: event.target.value }) }} />
										</div>
										<div className="mb-3">
											<label className="form-label">Address</label>
											<input type="text" className="form-control" value={contact.address} onChange={(event) => { setContact({ ...contact, address: event.target.value }) }} />
										</div>
										<div className="mb-3">
											<label className="form-label">Phone Number</label>
											<input type="text" className="form-control" value={contact.phone} onChange={(event) => { setContact({ ...contact, phone: event.target.value }) }} />
										</div>
									</fieldset>
								</form>
								<div className="d-flex flex-row justify-content-between">
									{!edittingstate && <button className="btn btn-light text-end" onClick={() => { setEdittingState(true) }}>Edit</button>}
									{edittingstate && <button className="btn btn-success text-end" onClick={saveUpdatedContact}>Save</button>}
									<button className="btn btn-danger ms-auto" onClick={deleteContact}>Delete Contact</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Link to="/home">
					<span className="btn btn-primary" href="#" role="button">
						Back to Contact Cards
					</span>
				</Link>
			</div>}
		</div>
	</>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
