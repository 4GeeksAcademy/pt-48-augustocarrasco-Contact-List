import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Create = props => {
    const { store, actions } = useContext(Context);
    const [contact, setContact] = useState({});

    const saveNewContact = () => {
        actions.createContact(contact);
    };


    useEffect(() => {
        setContact({ full_name: '', email: '', phone: '', address: '', agenda_slug: store.agenda })
    }, []);
    return (<>
        <div className="col-12 d-flex h-auto align-items-center justify-content-center flex-column">
            {<div className="jumbotron col-9 rounded-2 bg-secondary p-1">
                <div className="card mb-3 bg-secondary text-light border" style={{ 'maxWidth': '100%', 'minWidth': '400px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={`https://picsum.photos/400/600`} className="img-fluid rounded-start" alt="contact_image" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <form>
                                    <fieldset >
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
                                <button type="submit" className="btn btn-success text-end" onClick={saveNewContact}>Save</button>

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

Create.propTypes = {
    match: PropTypes.object
};
