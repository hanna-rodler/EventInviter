import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";
import { Event } from "../types/events";

interface EventCardProps {
    event: Event;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
    return (
        <Card sx={{ minWidth: 275, maxWidth: 275, display: 'block'}}>
            <CardContent>
                <Typography data-testid={event.name} variant="h5" component="div">
                    {event.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {event.date}, {event.time}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary" gutterBottom>
                    invited: {event.invitees.length}
                </Typography>
                <Typography variant="body2">
                    {event.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Link style={{marginLeft: 6}} to={`/events/${event.id}`}><Button style={{paddingLeft: 0}} size="small">Details</Button></Link>
            </CardActions>
        </Card>
    );
}