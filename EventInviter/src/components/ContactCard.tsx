import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

type ContactCardProps = {
  firstName: string;
  lastName: string;
  showTelNumber?: boolean;
  telNumber: string;
};

export const ContactCard = ({
  firstName,
  lastName,
  showTelNumber,
  telNumber,
}: ContactCardProps) => {
  return (
    <Paper elevation={4} style={{ padding: 16 }}>
      <Grid
        container
        justifyContent="space-between"
        alignItems={"center"}
        spacing={2}
      >
        <Grid item>
          <Stack direction="column" spacing={1}>
            <label>
              {firstName} {lastName}
            </label>
            {showTelNumber && <label>{telNumber}</label>}
          </Stack>
        </Grid>

        <Grid item>
          <Stack direction="row" spacing={1}>
            <EditIcon style={{ marginRight: 8 }} />
            <DeleteIcon />
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};
