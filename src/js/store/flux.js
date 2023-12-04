import API_Requests from "./contact_api";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			agenda: '',
			contact_list: [],
			demo: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			setAgenda: (agenda) => {
				const store = getStore();
				setStore({ ...store, agenda: agenda })
				// console.log(store.agenda)
			},
			getContactsFromAgenda: async () => {
				const store = getStore();
				const agendaSlug = store.agenda;
				const contact_list = await API_Requests.getAllContacts(agendaSlug);
				return contact_list;
			},
			setContactlist: (contact_list) => {
				const store = getStore();
				setStore({ ...store, contact_list });
			},
			getSingleContact: () => { },
			createContact: async (new_contact) => {
				await API_Requests.createContact(new_contact);
				const actions = getActions();
				const updatedContactList = await actions.getContactsFromAgenda();
				actions.setContactlist(updatedContactList);
			},
			updateContact: async (updatedContact) => {
				await API_Requests.updateContact(updatedContact.id, updatedContact)
				const actions = getActions();
				const updatedContactList = await actions.getContactsFromAgenda();
				actions.setContactlist(updatedContactList);
			},
			deleteContact: async (contact_id) => {
				await API_Requests.deleteContact(contact_id)
				const actions = getActions();
				const updatedContactList = await actions.getContactsFromAgenda();
				actions.setContactlist(updatedContactList);
			},
			deleteAgenda: async (agendaName) => { 
				await API_Requests.deleteAgenda(agendaName)
			},

		}
	};
};

export default getState;
