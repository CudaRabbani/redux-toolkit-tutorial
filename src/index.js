// import configureBugStore from "./store/configureStore";
import { bugAdded, bugResolved, bugAssigned, getUnresolvedBugs } from "./store/bugs";
import { projectAdded } from "./store/projects";
import { userAdded, getUsersWithUnassignedBug } from "./store/users";
import configureStore from "./store/configureStore"


const store = configureStore();
store.subscribe(() => {
    console.log("Store updated: ", store.getState());
})

// store.dispatch(bugAdded({description: "First Bug"}));
// store.dispatch(projectAdded({title: "First project"}));
// store.dispatch(bugAdded({description: "Second Bug"}));
// store.dispatch(projectAdded({title: "Second project"}));
// store.dispatch(bugAdded({description: "Third Bug"}));
// store.dispatch(bugResolved({id: 2}));
// const x = getUnresolvedBugs(store.getState());
// const y = getUnresolvedBugs(store.getState());
// console.log("Unresolved bugs: ", x);
// console.log("Is x and y are same: ", x === y);
// store.dispatch(userAdded({name: "Reza Rabbani"}));
// store.dispatch(userAdded({name: "Rabbani"}));
// store.dispatch(bugAssigned({bugId: 1, userId: 2}));
// console.log("Users with assigned bug ", getUsersWithUnassignedBug(store.getState()));

//dispatching a function:
//store.dispatch(); //throws error as the action has to be a plain JS object with type property
// store.dispatch({});
// store.dispatch(() => {}); //still throws an error
store.dispatch((dispatch, getState) => {
    dispatch(bugAdded({description: "Middleware Bug"}));
    // store.dispatch({type: "bugAdded", bugs: [1, 2, 3]});
});

