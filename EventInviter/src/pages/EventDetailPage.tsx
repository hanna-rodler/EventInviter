import {useParams} from "react-router-dom";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import {Box, Stack} from "@mui/material";
import Paper from '@mui/material/Paper';



export const EventDetailPage = () => {
    const {id} = useParams();

    return (
        <>
            <div id="event-information">
                <b>event name</b>
                <p>event with id: {id}</p>
                <Stack direction="row" alignItems="center" spacing={1} mt={2}>
                    <CalendarMonthIcon/>
                    <p>placeholder date</p>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1} mt={2}>
                    <AccessTimeIcon/>
                    <p>placeholder time</p>
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


        </>


    )
}