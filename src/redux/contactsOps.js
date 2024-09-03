import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const { data } = await axios.get('contacts')
        console.log(data)
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
})
