import { ContentData } from "../Mock/MockData";

export function GetLocal() {
    return JSON.parse(localStorage.getItem('initialState')) || []
}

function UpdateLocal(state) {
    localStorage.setItem('initialState', JSON.stringify(state))
}

export function SetInitialLocalStorage() {
    localStorage.setItem('initialState', JSON.stringify(ContentData))
}

export function GetSateByKey(key) {
    return JSON.parse(localStorage.getItem(key))
}

export function deleteCard(initialState, index) {
    const state = initialState
    const removedElement = state.splice(index, 1)
    return [removedElement, state]
}