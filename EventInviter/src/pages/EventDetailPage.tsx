import {useParams} from "react-router-dom";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import {Box, Grid, Stack} from "@mui/material";
import {Event} from '../types/events'
import { ContactCard } from "../components/ContactCard";
import {Fragment, useEffect, useState} from "react";
import {Contact} from "../types/contact";

const EVENTS: Event[] = [
    {
        id: 1,
        name: "Weihnachtsfeier",
        date: "28.12.2023",
        time: "18:00",
        location: "Linz",
        description: "Gemütliche Weihnachtsfeier mit Punsch und Keksen",
        isInvitesSent: false,
        invitees: [
            {
                id: 1,
                firstName: "Hanna",
                lastName: "Rodler",
                telNumber: "+43 677 62675165",
                email: "hannah@example.com",
            },
        ],
    },
    {
        id: 2,
        name: "FKF - Das Kalenderfest",
        date: "02.12.2023",
        time: "20:00",
        location: "Hagenberg",
        description: "Super duper party!",
        isInvitesSent: true,
        invitees:[
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
            }
        ],
    }
]

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

type Props = {
    events: Event[];
};

export const EventDetailPage = ({ events }: Props) => {
    events = EVENTS;
    let contacts = CONTACTS;

    const { id }: { id: string } = useParams();
    const [event, setEvent] = useState(events);
    const isInvitesSent = event[0]?.isInvitesSent || false;

    useEffect(() => {
        const selectedEvent = events.find((e) => e.id == id);

        if (selectedEvent)
            setEvent([selectedEvent]);

    }, [id]);

    return (
        <Fragment>

            <Grid mt={3} container spacing={2}>

                <Grid item xs={isInvitesSent ? 12 : 7}>
                    <Stack id="event-information" mb={5} >
                        <b>{event[0].name}</b>
                        <Stack direction="row" alignItems="center" spacing={1} mt={2}>
                            <CalendarMonthIcon/>
                            <p>{event[0].date}</p>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={1} mt={2}>
                            <AccessTimeIcon/>
                            <p>{event[0].time}</p>
                        </Stack>
                    </Stack>

                    <p>You sent an invitation to the following {event[0].invitees.length} people:</p>
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
                            />
                        ))}
                    </Stack>

                    <Box sx={{
                            borderStyle: 'dashed',
                            borderRadius: 1,
                            width: 'fit-content',
                            '& > :not(style)': {
                                m: 1,
                                p: 2,
                            },
                        }}>
                        <p>Drag & Drop New Invitees</p>
                    </Box>

                    <Stack direction="row" alignItems="center" spacing={1} mt={5} >
                        <SendIcon/>
                        <p>SEND INVITES</p>
                    </Stack>
                </Grid>


                {!isInvitesSent && (
                    <Grid item xs={5}>
                        <Stack gap={1} sx={{
                                borderLeft: "2px solid",
                                height: '100%',
                                padding: 2,}}>
                            {contacts.map(contact => (
                                <ContactCard
                                    key={contact.id}
                                    firstName={contact.firstName}
                                    lastName={contact.lastName}
                                    draggable={true}
                                    showTelNumber={false}
                                    showEdit={false}
                                    showDelete={false}
                                />
                            ))}
                        </Stack>
                    </Grid>
                )}

            </Grid>

        </Fragment>

    )
}