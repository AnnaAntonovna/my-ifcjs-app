import { mapHandler } from "../core/map/MapHandler";
import { userAuth } from "../core/user/userAuth";
import { Action } from "./Actions";

export const executeCore = (action: Action) => {
    if(action.type === "LOGIN") {
        userAuth.login();
    }
    if(action.type === 'LOGOUT') {
        userAuth.logout();
    }
    if(action.type === "START_MAP") {
        mapHandler.start();
    }
    if(action.type === "REMOVE_MAP") {
        mapHandler.remove();
    }
}