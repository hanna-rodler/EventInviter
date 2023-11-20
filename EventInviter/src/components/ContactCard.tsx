import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import * as React from "react";

type ContactCardProps = {
  firstName: string;
  lastName: string;
  showTelNumber?: boolean;
  telNumber: string;
  onEdit?: () => void;
  onClick?: () => void;
  onDelete?: () => void;
  showEdit?: boolean;
  showDelete?: boolean;
  draggable?: boolean;
};

export const ContactCard = ({
  firstName,
  lastName,
  showTelNumber,
  telNumber,
  onEdit,
  onClick,
  onDelete,
  showEdit,
  showDelete,
  draggable,
}: ContactCardProps) => {
  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event.dataTransfer.getData("text/plain"));
  };

  return (
    <Paper
      elevation={4}
      style={{ padding: 16, cursor: draggable ? "move" : "default" }}
      onClick={onClick}
      draggable={draggable}
      onDragStart={handleDragStart}
    >
      <Grid
        container
        justifyContent="space-between"
        alignItems={"center"}
        spacing={2}
      >
        <Grid item>
          <Stack direction="column" spacing={1}>
            <label style={{ cursor: draggable ? "move" : "default" }}>
              {firstName} {lastName}
            </label>
            {showTelNumber && <label>{telNumber}</label>}
          </Stack>
        </Grid>

        <Grid item>
          <Stack direction="row" spacing={1}>
            {showEdit && (
              <EditIcon
                style={{ marginRight: 8 }}
                onClick={onEdit}
                sx={{ cursor: "pointer" }}
              />
            )}
            {showDelete && (
              <DeleteIcon onClick={onDelete} sx={{ cursor: "pointer" }} />
            )}
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};
