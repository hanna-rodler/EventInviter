import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const EventCard = () => {
    return (
        <Card sx={{ minWidth: 250, maxWidth: 300, display: 'block'}}>
            <CardContent>
                <Typography variant="h5" component="div">
                    Event Name
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    MM.DD.YY, HH:MM am
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary" gutterBottom>
                    invited: 8
                </Typography>
                <Typography variant="body2">
                    Event description if wanted.
                    <br />
                    yay, this is so fun, come to my event
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Details</Button>
            </CardActions>

        </Card>
    );
}