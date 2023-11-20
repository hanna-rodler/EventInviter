import { createSlice } from "@reduxjs/toolkit";
import { Contact } from "../types/contact";
import { initializeContacts } from "../services/ContactService";
import { RootState } from "./store";

export interface ContactsState {
  entities: Contact[];
}

const initialState: ContactsState = {
  entities: initializeContacts(),
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    add: (state, action) => {
      state.entities.push(action.payload);
      console.log(action);
    },
    remove: (state, action) => {
      state.entities = state.entities.filter((e) => e.id !== action.payload.id);
      console.log(action);
    },
  },
});

export const { add, remove } = contactsSlice.actions;

// Selectors
export const selectContacts = (state: RootState) => state.contacts.entities;

export default contactsSlice.reducer;
