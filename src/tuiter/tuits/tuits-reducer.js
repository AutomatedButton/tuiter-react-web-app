import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
};


let tuitID = 0;
const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers: {
        createTuit: (state, action) => {
            state.unshift({
                ...action.payload,
                id: (tuitID + 1).toString(),
                likes: 0,
                retuits: 0,
                replies: 0
            })
            tuitID++;
        },
        deleteTuit: (state, action) => {
            const index = action.payload
            state.splice(index, 1)
        }
    }
});

export const { createTuit, deleteTuit } = tuitsSlice.actions;
export default tuitsSlice.reducer;