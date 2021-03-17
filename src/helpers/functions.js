import { ContentData } from "../Mock/MockData";
import {Card} from "antd";
import { v4 as uuid } from 'uuid';
import Meta from "antd/es/card/Meta";
import {ContentCard} from "../components/ContentCard/ContentCard";

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

export function createCard(initialState, setInitialState, title, theme, img, description) {
    const state = initialState
    const value = {title, theme, img, description}
    const createdElement = state.push(value)
    return [createdElement, state]
}