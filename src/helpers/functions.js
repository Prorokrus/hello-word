import { ContentData } from "../Mock/MockData";

export function SetInitialLocalStorage() {

    localStorage.setItem('initialSate', JSON.stringify(ContentData))

}

export function GetSateByKey(key) {
    return JSON.parse(localStorage.getItem(key))
}