import { useParams } from "react-router-dom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SendIcon from "@mui/icons-material/Send";
import { Box, Grid, Stack } from "@mui/material";
import { Event } from "../types/events";
import { ContactCard } from "../components/ContactCard";
import { Fragment, useEffect, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { useAppSelector } from "../store/hooks";
import { selectContacts } from "../store/contactsSlice";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const DraggableCard = ({ contact }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "CONTACT",
    item: { contact },
  });

  return (
    <div ref={(node) => drag(node)} style={{ opacity: isDragging ? 0.8 : 1 }}>
      <ContactCard
        key={contact.id}
        firstName={contact.firstName}
        lastName={contact.lastName}
        draggable={true}
        showTelNumber={false}
        showEdit={false}
        showDelete={false}
        telNumber={contact.telNumber}/>
    </div>
  );
};

export const EventDetailPage = () => {
  // events = EVENTS;
  const contacts = useAppSelector(selectContacts);
  const events: Event[] = useSelector(
    (state: RootState) => state.events.entities
  );

  const { id } = useParams() as { id: string };
  const numericId: number = parseInt(id, 10);
  const [event, setEvent] = useState(events);
  const isInvitesSent = event[0]?.isInvitesSent || false;

  useEffect(() => {
    const selectedEvent = events.find((e) => e.id === numericId);

    if (selectedEvent) setEvent([selectedEvent]);
  }, [id]);

  const handleDrop = (droppedContact) => {
    const isContactAlreadyAdded = event[0].invitees.some(
      (invitee) => invitee.id === droppedContact.id
    );

    if (!isContactAlreadyAdded) {
      const updatedEvent = {
        ...event[0],
        invitees: [...event[0].invitees, droppedContact],
      };

      setEvent([updatedEvent]);
    } else {
      alert(
        `Contact with ID ${droppedContact.id} is already added to the event.`
      );
    }
  };

  const handleDelete = (contactId: number) => {
    const updatedEvent = {
      ...event[0],
      invitees: event[0].invitees.filter((invitee) => invitee.id !== contactId),
    };

    setEvent([updatedEvent]);
  };

  const handleSendInvites = () => {
    const currEvent = {
      ...event[0],
    };

    currEvent.invitees.forEach((invitee) => {
      const invitationText = `Dear ${invitee.firstName} ${invitee.lastName}! You are invited to the event "${currEvent.name}" on ${currEvent.date} at ${currEvent.time}. "${currEvent.description}"`;
      const link = `https://api.whatsapp.com/send?phone=${invitee.telNumber}&text=${invitationText}`;
      window.open(link, "_blank");
    });
  };

  const [{ isOver }, drop] = useDrop({
    accept: "CONTACT",
    drop: (item) => handleDrop(item.contact),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <Fragment>
      <Grid mt={3} container spacing={2}>
        <Grid item xs={isInvitesSent ? 12 : 7}>
          <Stack id="event-information" mb={5}>
            <b>{event[0].name}</b>
            <Stack direction="row" alignItems="center" spacing={1} mt={2}>
              <CalendarMonthIcon />
              <p>{event[0].date}</p>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1} mt={2}>
              <AccessTimeIcon />
              <p>{event[0].time}</p>
            </Stack>
          </Stack>

          <p>
            You sent an invitation to the following {event[0].invitees.length}{" "}
            people:
          </p>
          <Stack direction="row" gap={1} mb={5}>
            {event[0]?.invitees.map((invitee) => (
              <ContactCard
                key={invitee.id}
                firstName={invitee.firstName}
                lastName={invitee.lastName}
                showTelNumber={false}
                showEdit={false}
                showDelete={true}
                draggable={true}
                onDelete={() => handleDelete(invitee.id)}
                telNumber={invitee.telNumber}/>
            ))}
          </Stack>

          <Box
            ref={drop}
            sx={{
              borderStyle: "dashed",
              borderRadius: 1,
              width: "fit-content",
              borderColor: isOver ? "green" : "gray",
              backgroundColor: isOver && "green",
              color: isOver && "white",
              "& > :not(style)": {
                m: 1,
                p: 2,
              },
            }}
          >
            <p>Drag & Drop New Invitees</p>
          </Box>

          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            mt={5}
            onClick={handleSendInvites}
            sx={{ cursor: "pointer" }}
          >
            <SendIcon />
            <p>SEND INVITES</p>
          </Stack>
        </Grid>

        {!isInvitesSent && (
          <Grid item xs={5}>
            <Stack
              gap={1}
              sx={{ borderLeft: "2px solid", height: "100%", padding: 2 }}
            >
              {contacts.map((contact) => (
                <DraggableCard
                  key={contact.id}
                  contact={contact}
                  onDrop={handleDrop}
                />
              ))}
            </Stack>
          </Grid>
        )}
      </Grid>
    </Fragment>
  );
};
