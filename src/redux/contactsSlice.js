import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { fetchContacts } from "./contactsOps";

const initialState = {
    items: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    loading: false,
    error: null,
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.items.unshift(action.payload)
            },
            prepare(contactData) {
                return {
                    payload: {
                        id: nanoid(),
                        ...contactData,
                    },
                };
            }
        },
        deleteContact(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
    },
    extraReducers: {
      
    }
})

export const selectContacts = (state) => { return state.contacts.items };
export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;