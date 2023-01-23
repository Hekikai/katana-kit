import { computed, ComputedRef } from 'vue'
import { ISize, ISizeName, ISizes } from '@/types'

const defaultSizes: ISizes = {
    sm: {
        height: '40px',
        padding: '0 20px',
        fontSize: '12px',
    },
    lg: {
        height: '48px',
        padding: '0 30px',
        fontSize: '17px',
    },
}

// TODO: fix type error
export default <T extends { size?: ISizeName }>(
    props: T,
    sizes: ISizes = defaultSizes,
): ComputedRef<ISize | null> => {
    if (!props.size) {
        return computed(() => null)
    } else {
        const isSizeInProps = props.size in sizes

        if (!isSizeInProps) return computed(() => null)

        return computed(() => ({
            height: sizes[props.size].height,
            padding: sizes[props.size].padding,
            fontSize: sizes[props.size].fontSize,
        }))
    }
}
