import {createSlice} from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";


let lastId = 0;

const slice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        userAdded: (users, action) => {
            users.push({
                id: ++lastId,
                name: action.payload.name
            });
        },
        userRemoved: (users, action) => {
            const index = users.findIndex(userAdded => userAdded.id === action.payload.id);
            users.splice(index, 1);
        }
    }
});

// const getUnresolvedusers = (users) => {
//     return users.filter(userAdded => !userAdded.resolved);
// }

// export const getUnresolvedusers = createSelector(
//     state => state.users,
//     users => users.filter(userAdded => !userAdded.resolved)
// );

export const getUsersWithUnassignedBug = createSelector(
    state => state.bugs,
    state => state.users,
    (bugs, users) => users.filter(user => bugs.some(bug => bug.assignedUserId === user.id))
);

export const {userAdded, userRemoved} = slice.actions;
export default slice.reducer;