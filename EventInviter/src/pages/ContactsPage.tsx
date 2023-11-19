import { Fragment, useState } from "react";
import { ContactCard } from "../components/ContactCard";
import { Contact } from "../types/contact";
import Stack from "@mui/material/Stack";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { SearchBar } from "../components/SearchBar";
import Modal from "@mui/material/Modal";
import CreateContactForm from "../components/CreateContactForm";
import Typography from "@mui/material/Typography";

const CONTACTS: Contact[] = [
  {
    id: 1,
    firstName: "Hanna",
    lastName: "Rodler",
    telNumber: "+43 677 62675165",
    email: "hannah@example.com",
  },
  {
    id: 2,
    firstName: "Tobias",
    lastName: "Kothbauer",
    telNumber: "+43 650 2109448",
    email: "tobias@example.com",
  },
  {
    id: 3,
    firstName: "Elena",
    lastName: "Ebetshuber",
    telNumber: "+43 664 88440326",
    email: "elena@example.com",
  },
  {
    id: 4,
    firstName: "Max",
    lastName: "Mustermann",
    telNumber: "+43 664 12345678",
    email: "max@example.com",
  },
  {
    id: 5,
    firstName: "Maria",
    lastName: "Musterfrau",
    telNumber: "+43 664 87654321",
    email: "maria@example.com",
  },
  {
    id: 6,
    firstName: "John",
    lastName: "Doe",
    telNumber: "+43 664 12345678",
    email: "john@example.com",
  },
];

type ContactsPageProps = {
  contacts: Contact[];
};

export const ContactsPage = ({ contacts }: ContactsPageProps) => {
  contacts = CONTACTS;
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
    const filtered = contacts.filter(
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

        <Modal
          open={openModal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <CreateContactForm contact={currentContact} onClose={handleClose} />
        </Modal>

        <SearchBar onSearch={handleSearch} />

        <Stack direction="column" gap={1} flexWrap={"wrap"}>
          {filteredContacts.map((contact) => (
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
