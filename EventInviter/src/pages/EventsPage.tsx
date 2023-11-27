import {EventCard} from "../components/EventCard";
import Stack from '@mui/material/Stack';
import type { RootState } from '../store/store';
import {Fragment, useState} from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { SearchBar } from "../components/SearchBar";
import {Event} from "../types/events";
import {useSelector} from "react-redux";
import { CreateEventForm } from "../components/CreateEventForm";
import {Dialog, useMediaQuery, Theme} from "@mui/material";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Button from '@mui/material/Button';
import { filterInvitationsNeeded } from "../store/eventsSlice";
import {useAppDispatch} from "../store/hooks";

export const EventsPage = () => {
    const events: Event[] = useSelector((state: RootState) => state.events.entities)
    const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

    const dispatch = useAppDispatch();
    const [openModal, setOpen] = useState(false);
    const [filterOn, setFilterOn] = useState(false);

    const createEventForm = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSearch = (searchTerm: string) => {
        console.log(searchTerm);
        let filtered = events.filter(event => event.name.includes(searchTerm));
        console.log('filtered', filtered);
    };

    return (
        <Fragment>
            <div>
                <h2>Events</h2>
                {/*<Stack direction="row" gap={1} paddingBottom={2} alignItems="center" justifyContent="flex-start" spacing={{ xs: 2, sm: 3, md: 4 }} useFlexGap flexWrap="wrap">*/}
                <Stack direction="row" gap={3} marginBottom={4} flexWrap="wrap">
                    <div>
                        <Button id="create-event" startIcon={<AddCircleIcon />} onClick={createEventForm} // Toggle the filterOn state
                                variant='outlined' >
                            Create Event
                        </Button>
                    </div>
                    <SearchBar onSearch={handleSearch} />
                    <div>
                        <Button startIcon={<FilterAltIcon />} onClick={() => {setFilterOn(!filterOn); dispatch(filterInvitationsNeeded(filterOn))}} // Toggle the filterOn state
                                variant={filterOn ? 'contained' : 'outlined'} // Use 'contained' if filterOn is true, 'outlined' otherwise
                        >
                            Invitations not sent yet
                        </Button>
                    </div>
                </Stack>
                <Dialog
                    open={openModal}
                    onClose={handleClose}
                    fullWidth
                    PaperProps={{
                        style: {
                            height: "70%",
                        },
                    }}
                >
                    <CreateEventForm onClose={handleClose} />
                </Dialog>
                <Stack direction="row" justifyContent={isSmallScreen ? 'center' : 'flex-start'} spacing={3} useFlexGap flexWrap="wrap">
                    {events.map(event => (
                            <EventCard key={event.id} event={event}></EventCard>
                    ))}
                </Stack>
            </div>
        </Fragment>
    )
}



