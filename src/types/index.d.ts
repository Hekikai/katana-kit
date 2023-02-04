import { Ref } from 'vue'

export type IColors =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'

type ISizeName = 'sm' | 'lg'
interface ISize {
    height: string
    padding: string
    fontSize: string
}

export type ISizes = Record<ISizeName, ISize>

export interface TModelValue<T> {
    modelValue: Ref<T>
    updateModelValue: (val: T) => void
}
