import {EventCard} from "../components/EventCard";
import Stack from '@mui/material/Stack';
import type { RootState } from '../store/store';
import {Fragment} from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Typography from "@mui/material/Typography";
import { SearchBar } from "../components/SearchBar";
import {Event} from "../types/events";
import {useSelector} from "react-redux";

export const EventsPage = () => {
    const events: Event[] = useSelector((state: RootState) => state.events.entities)
    // const dispatch = useDispatch()

    return (
        <Fragment>
            <div>
                <h2>Events</h2>
                <Stack direction="row" gap={1} paddingBottom={2} alignItems="center" justifyContent="flex-start" spacing={{ xs: 2, sm: 3, md: 4 }} useFlexGap flexWrap="wrap">
                    <div style={{ minWidth: 120, display: 'flex' }}>
                        <AddCircleIcon
                            sx={{ cursor: "pointer", paddingRight: 1 }}
                        ></AddCircleIcon>
                        <Typography
                            sx={{ cursor: "pointer" }}
                            style={{ background: "none", borderWidth: "1px" }}
                        >
                            Create Contact
                        </Typography>
                    </div>
                    <SearchBar onSearch={handleSearch} />
                </Stack>
                <Stack direction="row" spacing={3} useFlexGap flexWrap="wrap">
                    {events.map(event => (
                            <EventCard key={event.id} event={event}></EventCard>
                    ))}
                </Stack>
            </div>
            <div>
                <h2>Contacts</h2>
            </div>
        </Fragment>
    )
}

const handleSearch = (searchTerm: string) => {
    console.log(searchTerm);
};