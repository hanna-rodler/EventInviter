import { Fragment, useState } from "react";
import { ContactCard } from "../components/ContactCard";
import { Contact } from "../types/contact";
import Stack from "@mui/material/Stack";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { SearchBar } from "../components/SearchBar";
import CreateContactForm from "../components/CreateContactForm";
import Typography from "@mui/material/Typography";
import { Dialog } from "@mui/material";
import { useAppSelector } from "../store/hooks";
import { selectContacts } from "../store/contactsSlice";

export const ContactsPage = () => {
  const contacts = useAppSelector(selectContacts);

  const [filteredContacts, setFilteredContacts] = useState(contacts);
  const [currentContact, setCurrentContact] = useState<Contact>({
    id: 0,
    firstName: "",
    lastName: "",
    telNumber: "",
    email: "",
  });

  const handleContactCardClick = (clickedContact: Contact) => {
    setCurrentContact(clickedContact);
  };

  const [openModal, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    const emptyContact: Contact = {
      id: 0,
      firstName: "",
      lastName: "",
      telNumber: "",
      email: "",
    };
    setCurrentContact(emptyContact);
    console.log("in handle open");
  };

  const handleClose = () => setOpen(false);

  const handleSearch = (searchTerm: string) => {
    const filtered = filteredContacts.filter(
      (contact) =>
        contact.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.telNumber.includes(searchTerm)
    );

    setFilteredContacts(filtered);
  };

  return (
    <Fragment>
      <div style={{ padding: 16 }}>
        <Stack direction="row" gap={1} paddingBottom={2} alignItems={"center"}>
          <AddCircleIcon
            sx={{ cursor: "pointer" }}
            onClick={handleOpen}
          ></AddCircleIcon>
          <Typography
            sx={{ cursor: "pointer" }}
            style={{ background: "none", borderWidth: "1px" }}
            onClick={handleOpen}
          >
            Create Contact
          </Typography>
        </Stack>

        <Dialog
          open={openModal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <CreateContactForm contact={currentContact} onClose={handleClose} />
        </Dialog>

        <SearchBar onSearch={handleSearch} />

        <Stack direction="column" gap={1} flexWrap={"wrap"}>
          {filteredContacts.map((contact: Contact) => (
            <ContactCard
              key={contact.id}
              firstName={contact.firstName}
              lastName={contact.lastName}
              showTelNumber={true}
              telNumber={contact.telNumber}
              onClick={() => handleContactCardClick(contact)}
            />
          ))}
        </Stack>
      </div>
    </Fragment>
  );
};
