import { getContacts, getFilter } from 'redux/contactsSelectors';
import { Button, ContactListStyled, ListItem } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const ContactList = ({ id }) => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.includes(filterValue)
  );
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <ContactListStyled>
      {filteredContacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <p>
            {name}: {number}
          </p>
          <Button type="button" onClick={handleDelete}>
            Delete
          </Button>
        </ListItem>
      ))}
    </ContactListStyled>
  );
};
