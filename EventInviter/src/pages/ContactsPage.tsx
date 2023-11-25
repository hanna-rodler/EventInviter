import { Fragment, useState } from "react";
import { ContactCard } from "../components/ContactCard";
import { Contact } from "../types/contact";
import Stack from "@mui/material/Stack";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { SearchBar } from "../components/SearchBar";
import CreateContactForm from "../components/CreateContactForm";
import Typography from "@mui/material/Typography";
import { Dialog } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { remove, selectContacts } from "../store/contactsSlice";

export const ContactsPage = () => {
  const contacts = useAppSelector(selectContacts);
  const dispatch = useAppDispatch();

  // const [filteredContacts, setFilteredContacts] = useState(contacts);
  const [currentContact, setCurrentContact] = useState<Contact>({
    id: 0,
    firstName: "",
    lastName: "",
    telNumber: "",
    email: "",
  });

  const editContact = (clickedContact: Contact) => {
    setCurrentContact(clickedContact);
    openDialog();
  };

  const deleteContact = (clickedContact: Contact) => {
    setCurrentContact(clickedContact);
    dispatch(remove(clickedContact));
    const emptyContact: Contact = {
      id: 0,
      firstName: "",
      lastName: "",
      telNumber: "",
      email: "",
    };
    setCurrentContact(emptyContact);
  };

  const [openModal, setOpen] = useState(false);
  const openDialog = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    const emptyContact: Contact = {
      id: 0,
      firstName: "",
      lastName: "",
      telNumber: "",
      email: "",
    };
    setCurrentContact(emptyContact);
    // setFilteredContacts(contacts);
  };

  const handleSearch = (searchTerm: string) => {
    console.log(searchTerm);
    // const filtered = contacts.filter(
    //   (contact) =>
    //     contact.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //     contact.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //     contact.telNumber.includes(searchTerm)
    // );

    // setFilteredContacts(filtered);
  };

  return (
    <Fragment>
      <div style={{ padding: 16 }}>
        <Stack direction="row" gap={1} paddingBottom={2} alignItems={"center"}>
          <AddCircleIcon
            sx={{ cursor: "pointer" }}
            onClick={openDialog}
          ></AddCircleIcon>
          <Typography
            sx={{ cursor: "pointer" }}
            style={{ background: "none", borderWidth: "1px" }}
            onClick={openDialog}
          >
            Add Contact
          </Typography>
        </Stack>

        <Dialog
          open={openModal}
          onClose={handleClose}
          fullWidth
          PaperProps={{
            style: {
              height: "60%",
            },
          }}
        >
          <CreateContactForm contact={currentContact} onClose={handleClose} />
        </Dialog>

        <SearchBar onSearch={handleSearch} />

        <Stack direction="column" gap={1} flexWrap={"wrap"}>
          {contacts.map((contact: Contact) => (
            <ContactCard
              key={contact.id}
              firstName={contact.firstName}
              lastName={contact.lastName}
              showTelNumber={true}
              telNumber={contact.telNumber}
              onEdit={() => editContact(contact)}
              onDelete={() => deleteContact(contact)}
              showDelete={true}
              showEdit={true}
            />
          ))}
        </Stack>
      </div>
    </Fragment>
  );
};
