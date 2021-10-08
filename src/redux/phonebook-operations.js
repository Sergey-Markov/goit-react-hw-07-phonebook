import axios from "axios";
import actions from "./phonebook-actions";
axios.defaults.baseURL = "http://localhost:7777";

const fetchContacts = () => (dispatch) => {
  dispatch(actions.fetchContactsRequest());
  axios
    .get("/contacts")
    .then(({ data }) => dispatch(actions.fetchContactsSuccess(data)))
    .catch((error) => dispatch(actions.fetchContactsError(error)));
};

const addContacts = (newContact) => (dispatch) => {
  const contact = newContact;
  dispatch(actions.addContactsRequest());
  axios
    .post("/contacts", contact)
    .then(({ data }) => dispatch(actions.addContactsSuccess(data)))
    .catch((error) => dispatch(actions.addContactsError(error)));
};

// eslint-disable-next-line
export default { addContacts, fetchContacts };
