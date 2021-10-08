import s from "../Contacts/Contacts.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import phonebookOperations from "../../redux/phonebook-operations";
import { useEffect } from "react";

function Contacts({ fetchContacts, contacts, onClick }) {
  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  return (
    <ul className={s.list}>
      {contacts.map((contact) => {
        const { id, name, number } = contact;
        return (
          <li key={id} className={s.item}>
            {name}: {number}
            <button
              type="button"
              onClick={() => onClick(id)}
              className={s.button}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

// const mapStateToProps = (state) => {
//   const { filter, contacts } = state.phonebook;
//   const filteredContacts = () => {
//     const normalizeFilter = filter.toLowerCase().trim();
//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(normalizeFilter)
//     );
//   };
//   const filteredContact = filteredContacts();

//   return {
//     contacts: filteredContact,
//   };
// };
const mapStateToProps = (state) => {
  const { filter, contacts } = state.phonebook;
  console.log("My contacts:", contacts);
  console.log("My filter:", filter);

  const filteredContacts = () => {
    const normalizeFilter = filter.toLowerCase().trim();

    return contacts.filter((contact) => {
      console.log(typeof contact.name);
      return contact.name.toLowerCase().includes(normalizeFilter);
    });
  };
  const filteredContact = filteredContacts();

  return {
    contacts: filteredContact,
  };
};
const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(phonebookOperations.fetchContacts()),
  onClick: (id) => dispatch(phonebookOperations.deleteContacts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
