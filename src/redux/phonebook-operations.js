import axios from "axios";
import phonebookActions from "./phonebook-actions";
axios.defaults.baseURL = "http://localhost:7777";

const fetchContacts = () => (dispatch) => {
  dispatch(phonebookActions.fetchContactsRequest());
  axios
    .get("/contacts")
    .then(({ data }) => dispatch(phonebookActions.fetchContactsSuccess(data)))
    .catch((error) => dispatch(phonebookActions.fetchContactsError(error)));
};

const addContacts = (newContact) => (dispatch) => {
  const contact = newContact;
  dispatch(phonebookActions.addContactsRequest());

  axios
    .post("/contacts", contact)
    .then(({ data }) => dispatch(phonebookActions.addContactsSuccess(data)))
    .catch((error) => dispatch(phonebookActions.addContactsError(error)));
};

// eslint-disable-next-line
export default { addContacts, fetchContacts };
