import { createAction } from "@reduxjs/toolkit";

const fetchContactsRequest = createAction("contacts/fetchContactsRequest");
const fetchContactsSuccess = createAction("contacts/fetchContactsSuccess");
const fetchContactsError = createAction("contacts/fetchContactsError");

const addContactsRequest = createAction("contacts/addContactsRequest");
const addContactsSuccess = createAction("contacts/addContactsSuccess");
const addContactsError = createAction("contacts/addContactsError");

const deleteContacts = createAction("contacts/delete");
const onChangeFilter = createAction("contacts/changeFilter");

// eslint-disable-next-line
export default {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContacts,
  onChangeFilter,
};

// const addContacts = (newContact) => ({
//   type: phonebookActionsTypes.ADD,
// payload: {
//   id: shortid.generate(),
//   ...newContact,
// },
// });

// const onChangeFilter = (value) => ({
//   type: phonebookActionsTypes.CHANGE_FILTER,
//   payload: value,
// });

// const deleteContacts = (contactId) => ({
//   type: phonebookActionsTypes.DELETE,
//   payload: contactId,
// });
