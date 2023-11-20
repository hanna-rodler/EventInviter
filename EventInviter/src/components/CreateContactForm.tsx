import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { Contact } from "../types/contact";
import { useAppDispatch } from "../store/hooks";
import { add, edit } from "../store/contactsSlice";
import { useState } from "react";

type CreateContactFormProps = {
  contact: Contact;
  onClose: () => void;
};

export default function CreateContactForm({
  contact,
  onClose,
}: CreateContactFormProps) {
  const [firstName, setFirstName] = useState(contact.firstName);
  const [lastName, setLastName] = useState(contact.lastName);
  const [telNumber, setTelNumber] = useState(contact.telNumber);
  const [email, setEmail] = useState(contact.email);

  const dispatch = useAppDispatch();

  const handleSave = (editingDialog: boolean) => {
    if (editingDialog) {
      const editedContact: Contact = {
        id: contact.id,
        firstName,
        lastName,
        telNumber,
        email,
      };
      dispatch(edit(editedContact));
    } else {
      const newContact: Contact = {
        id: Math.random(),
        firstName,
        lastName,
        telNumber,
        email,
      };
      dispatch(add(newContact));
    }
    onClose();
  };

  const style = {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <Box sx={style} component="form" noValidate autoComplete="on">
      <div
        style={{
          flexDirection: "column",
          gap: "12px",
          alignItems: "flex-start",
        }}
      >
        <h3>Create new contact</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <TextField
            size="small"
            id="first-name"
            label="First name"
            defaultValue={contact.firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            size="small"
            id="last-name"
            label="Last name"
            defaultValue={contact.lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            size="small"
            id="tel-numer"
            label="Telephone number"
            defaultValue={contact.telNumber}
            onChange={(e) => setTelNumber(e.target.value)}
          />
          <TextField
            size="small"
            id="email"
            label="Email"
            defaultValue={contact.email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <Paper
          onClick={() => handleSave(contact.id !== 0)}
          sx={{ cursor: "pointer" }}
          elevation={3}
          style={{
            padding: "6px 16px",
            textAlign: "center",
            width: "fit-content",
            alignSelf: "flex-end",
            margin: "24px 0px 16px 200px",
            background: "#9e9e9e",
          }}
        >
          Save
        </Paper>
      </div>
    </Box>
  );
}
