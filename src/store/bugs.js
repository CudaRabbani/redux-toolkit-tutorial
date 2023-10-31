import {createSlice} from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";


let lastId = 0;

const slice = createSlice({
    name: 'bugs',
    initialState: [],
    reducers: {
        bugAdded: (bugs, action) => {
            bugs.push({
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            });
        },
        bugResolved: (bugs, action) => {
            const index = bugs.findIndex(bug => bug.id === action.payload.id);
            bugs[index].resolved = true;
        },
        bugAssigned: (bugs, action) => {
            const index = bugs.findIndex(bug => bug.id === action.payload.bugId);
            bugs[index].assignedUserId = action.payload.userId;
        }
    }
});

// const getUnresolvedBugs = (bugs) => {
//     return bugs.filter(bug => !bug.resolved);
// }

export const getUnresolvedBugs = createSelector(
    state => state.bugs,
    bugs => bugs.filter(bug => !bug.resolved)
);

export const {bugAdded, bugResolved, bugAssigned} = slice.actions;
export default slice.reducer;