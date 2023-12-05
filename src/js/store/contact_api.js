const API_URL = 'https://playground.4geeks.com/apis/fake/contact';

const API_Requests = {

    getAllContacts: async (agendaName) => {
        const request = await fetch(`${API_URL}/agenda/${agendaName}`, { method: "GET" });
        const data = await request.json();
        return data;
    },

    getSingleContact: async (contactId) => {
        const request = await fetch(`${API_URL}/${contactId}`, { method: "GET" });
        const data = await request.json();
        return data;
    },
    createContact: async (contact) => {
        const request = await fetch(`${API_URL}/`, {
            method: "POST", body: JSON.stringify(contact), headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = await request.json();
        return data;
    },

    updateContact: async (contactId, contact) => {
        const request = await fetch(`${API_URL}/${contactId}`, {
            method: "PUT", body: JSON.stringify(contact), headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = await request.json();
        return data
    },
    deleteContact: async (contactId) => {
        const request = await fetch(`${API_URL}/${contactId}`, { method: "DELETE" });
        const data = await request.json();
        return data;
    },

    deleteAgenda: async (agendaName) => {
        const request = await fetch(`${API_URL}/agenda/${agendaName}`, { method: "DELETE" });
        return
    }
}
export default API_Requests