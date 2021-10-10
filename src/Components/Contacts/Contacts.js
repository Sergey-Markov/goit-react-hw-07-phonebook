import s from "../Contacts/Contacts.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import phonebookOperations from "../../redux/phonebook-operations";
import { useEffect } from "react";

function Contacts({ fetchContacts, contacts, isLoading, onClick }) {
  useEffect(() => {
    fetchContacts();
  }, [fetchContacts, onClick]);

  return (
    <div>
      <ul className={s.list}>
        {contacts.map((contact) => {
          const { id, name, number } = contact;
          return (
            <li key={id} className={s.item}>
              {name}: {number}
              <button
                type="button"
                onClick={() => {
                  onClick(id);
                  // fetchContacts();
                }}
                className={s.button}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
      {isLoading && <h3>Loading...</h3>}
    </div>
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
  const { filter, contacts, loading } = state.phonebook;

  const filteredContacts = () => {
    const normalizeFilter = filter.toLowerCase().trim();

    return contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(normalizeFilter);
    });
  };
  const filteredContact = filteredContacts();

  return {
    isLoading: loading,
    contacts: filteredContact,
  };
};
const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(phonebookOperations.fetchContacts()),
  onClick: (id) => dispatch(phonebookOperations.deleteContacts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
