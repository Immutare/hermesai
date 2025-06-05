import { IQueryRequest } from "api/queries";
import { Constants } from "./constants";

export function getUserHistory(): Array<IQueryRequest> {
    return JSON.parse(sessionStorage.getItem(Constants.HISTORY_KEY) || '[]') ;
}

export function addToUserHistory(record: IQueryRequest) {
    const currentSession = getUserHistory();
    if (currentSession) {
        currentSession.push(record);
        sessionStorage.setItem(Constants.HISTORY_KEY, JSON.stringify(currentSession));
    } else {
        sessionStorage.setItem(Constants.HISTORY_KEY, JSON.stringify([record]));
    }
}
