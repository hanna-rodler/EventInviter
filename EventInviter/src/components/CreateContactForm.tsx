import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Contact } from "../types/contact";
import { useAppDispatch } from "../store/hooks";
import { add, edit } from "../store/contactsSlice";
import { useState } from "react";
import { Button } from "@mui/material";

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

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [telError, setTelError] = useState("");
  const [mailError, setMailError] = useState("");

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

  const handleFirstName = (e) => {
    const inputText = e.target.value;
    const validText = /^[a-zA-ZäöüßÄÖÜ.,!?()-\s]+$/.test(inputText);

    if (validText) {
      setFirstName(inputText);
      setFirstNameError("");
    } else {
      setFirstNameError("Invalid name.");
    }
  };

  const handleLastName = (e) => {
    const inputText = e.target.value;
    const validText = /^[a-zA-ZäöüßÄÖÜ.,!?()-\s]+$/.test(inputText);

    if (validText) {
      setLastName(inputText);
      setLastNameError("");
    } else {
      setLastNameError("Invalid name.");
    }
  };

  const handleTelNumber = (e) => {
    const inputNumber = e.target.value;
    const isValidPhoneNumber = /^\d+$/.test(inputNumber);

    if (isValidPhoneNumber) {
      setTelNumber(inputNumber);
      setTelError("");
    } else {
      setTelError("Invalid phone number.");
    }
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail);

    if (isValidEmail) {
      setEmail(inputEmail);
      setMailError("");
    } else {
      setMailError("Invalid email address.");
    }
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
        <h3>Add new contact</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <TextField
            size="small"
            id="first-name"
            label="First name"
            defaultValue={contact.firstName}
            onChange={handleFirstName}
            error={Boolean(firstNameError)}
            helperText={firstNameError}
          />
          <TextField
            size="small"
            id="last-name"
            label="Last name"
            defaultValue={contact.lastName}
            onChange={handleLastName}
            error={Boolean(lastNameError)}
            helperText={lastNameError}
          />
          <TextField
            size="small"
            id="tel-number"
            label="Telephone number"
            defaultValue={contact.telNumber}
            onChange={handleTelNumber}
            error={Boolean(telError)}
            helperText={telError}
          />
          <TextField
            size="small"
            onChange={handleEmailChange}
            error={Boolean(mailError)}
            helperText={mailError}
            id="email"
            label="Email"
            defaultValue={contact.email}
          />
        </div>
        <Button
          onClick={() => handleSave(contact.id !== 0)}
          sx={{ cursor: "pointer" }}
          disabled={
            firstName == "" ||
            lastName == "" ||
            telNumber == "" ||
            email == "" ||
            firstNameError != "" ||
            lastNameError != "" ||
            telError !== "" ||
            mailError !== ""
          }
          style={{
            padding: "6px 16px",
            textAlign: "center",
            width: "fit-content",
            alignSelf: "flex-end",
            margin: "24px 0px 16px 200px",
            background: "#9e9e9e",
          }}
          id="save-contact-button"
        >
          Save
        </Button>
      </div>
    </Box>
  );
}
