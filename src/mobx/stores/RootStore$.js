import { types } from 'mobx-state-tree';
import { ContentModel} from "../models/ContentModel.model";
import { ContentData } from '../../Mock/MockData'

export const RootStore$ = types.model('RootStore$', {
    content$: types.array(ContentModel)
})
    .actions((self) => ({
        setUpdateContent(cont) {
            self.content$ = cont
        },
        setInitialState() {
            self.content$ = ContentData
        }
    }))