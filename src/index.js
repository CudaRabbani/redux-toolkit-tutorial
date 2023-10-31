import configureBugStore from "./store/configureStore";
import { bugAdded, bugResolved, getUnresolvedBugs } from "./store/bugs";
import { projectAdded } from "./store/projects";


const store = configureBugStore();
store.subscribe(() => {
    console.log("Store updated: ", store.getState());
})
console.log(store.getState());

store.dispatch(bugAdded({description: "First Bug"}));
store.dispatch(projectAdded({title: "First project"}));
store.dispatch(bugAdded({description: "Second Bug"}));
store.dispatch(projectAdded({title: "Second project"}));
store.dispatch(bugAdded({description: "Third Bug"}));
store.dispatch(bugResolved({id: 2}));
const x = getUnresolvedBugs(store.getState());
const y = getUnresolvedBugs(store.getState());
console.log("Unresolved bugs: ", x);
console.log("Is x and y are same: ", x === y);
