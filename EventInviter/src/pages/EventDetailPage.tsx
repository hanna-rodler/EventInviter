import {useParams} from "react-router-dom";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import {Box, Stack} from "@mui/material";
import Paper from '@mui/material/Paper';
import {Event} from '../types/events'
import {Fragment, useEffect, useState} from "react";

const EVENTS: Event[] = [
    {
        id: 1,
        name: "Weihnachtsfeier",
        date: "28.12.2023",
        time: "18:00",
        location: "Linz",
        description: "Gemütliche Weihnachtsfeier mit Punsch und Keksen",
        isInvitesSent: false,
    },
    {
        id: 2,
        name: "FKF - Das Kalenderfest",
        date: "02.12.2023",
        time: "20:00",
        location: "Hagenberg",
        description: "Super duper party!",
        isInvitesSent: false,
    }
]

type Props = {
    events: Event[];
};


export const EventDetailPage = ({ events }: Props) => {
    events = EVENTS;
    const { id }: { id: string } = useParams();
    const [event, setEvent] = useState(events);

    useEffect(() => {
        const selectedEvent = events.find((e) => e.id == id);

        if (selectedEvent) {
            setEvent([selectedEvent]);
        }

    }, [id]);

    return (
        <Fragment>
            <div id="event-information">
                <b>{event[0].name}</b>
                <Stack direction="row" alignItems="center" spacing={1} mt={2}>
                    <CalendarMonthIcon/>
                    <p>{event[0].date}</p>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1} mt={2}>
                    <AccessTimeIcon/>
                    <p>{event[0].time}</p>
                </Stack>
            </div>

            <p>You sent an invitation to the following x people:</p>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        mb: 5,
                        p: 2,
                    },
                }}
            >
                <Paper draggable square={false} elevation={2} >rounded corners</Paper>
                <Paper draggable square={false} elevation={2} >rounded corners</Paper>
                <Paper draggable square={false} elevation={2} >rounded corners</Paper>
                <Paper draggable square={false} elevation={2} >rounded corners</Paper>
                <Paper draggable square={false} elevation={2} >rounded corners</Paper>
            </Box>

            <Box
                sx={{
                    borderStyle: 'dashed',
                    borderRadius: 1,
                    width: 'fit-content',
                    '& > :not(style)': {
                        m: 1,
                        p: 2,
                    },
                }}
            >
                <p>Drag & Drop New Invitees</p>
            </Box>

            <Stack direction="row" alignItems="center" spacing={1} mt={2}>
                <SendIcon/>
                <p>SEND INVITES</p>
            </Stack>


        </Fragment>


    )
}