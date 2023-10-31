import configureBugStore from "./store/configureStore";
import { bugAdded, bugResolved } from "./store/bugs";


const store = configureBugStore();
store.subscribe(() => {
    console.log("Store updated: ", store.getState());
})
console.log(store.getState());

store.dispatch(bugAdded({description: "First Bug"}));
