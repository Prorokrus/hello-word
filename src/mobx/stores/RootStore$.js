import {applySnapshot, types} from 'mobx-state-tree';
import { ContentModel} from "../models/ContentModel.model";
import { ContentData } from '../../Mock/MockData'
import {flow} from "mobx";
import {notification} from "antd";
import { ModifyData } from '../helpers/funts';
import {AddContent} from "../models/AddContentModel.model";
export const RootStore$ = types.model('RootStore$', {
    content$: types.array(ContentModel),
    addContent$: types.maybe(AddContent),
})
    .actions((self) => ({
        setUpdateContent(cont) {
            self.content$ = cont
        },
        setInitialState() {
            self.fetchDataFromApi()
            self.content$ = ContentData
        }
    }))

    .actions((self) => ({

        fetchDataFromApi: flow(function* () {
            try {
                const ans = yield fetch('http://jsonplaceholder.typicode.com/posts')
                    .then(response => response.json())

                notification.success({message:'Data was received'})
                const beautifyData = ModifyData(ans)
                applySnapshot(self.content$, beautifyData)
                console.log(ans)
            } catch (e) {
                notification.error({message: e.message})
            }
        }),

        addContent(data) {

            const newData = {
                ...data,
            }

            self.content$.push(newData)

            self.addContent$ = {}
        }
    }))

