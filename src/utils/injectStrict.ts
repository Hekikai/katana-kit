import { inject, InjectionKey } from 'vue'
import { IKTabs } from '@/types'

export const KTabsKey: InjectionKey<IKTabs> = Symbol('KTabs')

export const injectStrict = <T>(key: InjectionKey<T>, fallback?: T) => {
    const resolved = inject(key, fallback)
    if (!resolved) {
        throw new Error(`Could not resolve ${key.description}`)
    }

    return resolved
}

export const injectKTabs = () => {
    return injectStrict(KTabsKey)
}
