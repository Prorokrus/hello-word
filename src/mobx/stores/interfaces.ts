import {Instance, SnapshotIn} from "mobx-state-tree";
import { ContentModel } from "../models/ContentModel.model";
import { RootStore$ } from "./RootStore$";

export interface ISnapshotContentModelIn extends SnapshotIn<typeof ContentModel> {
}

export interface IRequestData {
    id: string,
    title: string,
    body: string
}[]