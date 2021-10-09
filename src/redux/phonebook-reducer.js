import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import phonebookActions from "../redux/phonebook-actions";

const {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContacts,
  onChangeFilter,
} = phonebookActions;

const contacts = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactsSuccess]: (state, { payload }) => {
    // if (state.find((contact) => contact.name === payload.name)) {
    //   alert(`${payload.name} is already created!`);

    //   return state;
    // }
    return [...state, payload];
  },
  [deleteContacts]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filter = createReducer("", {
  [onChangeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactsRequest]: () => true,
  [addContactsSuccess]: () => false,
  [addContactsError]: () => false,
});
export default combineReducers({
  contacts,
  filter,
  loading,
});

// const contacts = (state = initialContactsState, { type, payload }) => {
//   switch (type) {
//     case phonebookActionsTypes.ADD:
//       if (state.find((contact) => contact.name === payload.name)) {
//         alert(`${payload.name} is already created!`);
//         return state;
//       }
//       return [...state, payload];

//     case phonebookActionsTypes.DELETE:
//       return state.filter((contact) => contact.id !== payload);
//     default:
//       return state;
//   }
// };
// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case phonebookActionsTypes.CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

// const initialContactsState = [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];
