import { createSlice } from '@reduxjs/toolkit';
import { Event } from "../types/events";
import { initializeEvents } from "../services/EventsService";

export interface EventsState {
    entities: Event[];
    originalEvents: Event[]
}

const initialState: EventsState = {
    entities: initializeEvents(),
    originalEvents: initializeEvents(),
};

export const eventsSlice = createSlice({
    name: "events",
    initialState,
    reducers: {
        add: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.entities.push(action.payload);
            console.log('added', state.entities);
        },
        remove: (state, action) => {
            state.entities = state.entities.filter((e) => e.id !== action.payload.id);
            state.originalEvents = state.originalEvents.filter((e) => e.id !== action.payload.id)
            console.log('removed', action);
        },
        filterInvitationsNeeded: (state, action) => {
            const { payload } = action;
            if (payload) {
                // Undo the filtering by restoring the original unfiltered events
                state.entities = [...state.originalEvents];
                return state;
            }

            // filter events by isInvitesSent
            state.originalEvents = [...state.entities]; // Store the original unfiltered entities
            state.entities = state.entities.filter((event) => !event.isInvitesSent);
            return state;
        },
    },
})

export const { add, remove, filterInvitationsNeeded } = eventsSlice.actions

export default eventsSlice.reducer