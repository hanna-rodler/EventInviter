import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { Contact } from "../types/contact";

type CreateContactFormProps = {
  contact: Contact;
  onClose: () => void;
};

export default function CreateContactForm({
  contact,
  onClose,
}: CreateContactFormProps) {
  const handleSave = () => {
    console.log("in handle save");
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
    width: 300,
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: 1,
  };

  return (
    <Box sx={style} component="form" noValidate autoComplete="on">
      <div
        style={{
          display: "flex",
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
          />
          <TextField
            size="small"
            id="last-name"
            label="Last name"
            defaultValue={contact.lastName}
          />
          <TextField
            size="small"
            id="tel-numer"
            label="Telephone number"
            defaultValue={contact.telNumber}
          />
          <TextField
            size="small"
            id="email"
            label="Email"
            defaultValue={contact.email}
          />
        </div>
        <Paper
          onClick={handleSave}
          sx={{ cursor: "pointer" }}
          elevation={3}
          style={{
            padding: "6px 16px",
            alignSelf: "flex-end",
            margin: "12px 0px 16px",
          }}
        >
          Save
        </Paper>
      </div>
    </Box>
  );
}
