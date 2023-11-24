import { createSlice } from '@reduxjs/toolkit';
import { Event } from "../types/events";
import { initializeEvents } from "../services/EventsService";

export interface EventsState {
    entities: Event[];
}

const initialState: EventsState = {
    entities: initializeEvents(),
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
            state.entities.push(action.payload)
            console.log('added', action);
        },
        remove: (state, action) => {
            state.entities = state.entities.filter((e) => e.id !== action.payload.id);
            console.log('added', action);
        },
    },
})

export const { add, remove } = eventsSlice.actions

export default eventsSlice.reducer