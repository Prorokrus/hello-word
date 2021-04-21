import { types } from 'mobx-state-tree'

export const AddContent = types.model('AddContent', {
    title: '',
    description: '',
    img: '',
    theme: ''
})

    .actions((self) => ({
        updateField<key extends keyof typeof self>(key: key, value: typeof self[key]) {
            self[key] = value
        }
    }))