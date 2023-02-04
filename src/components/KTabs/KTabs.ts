import { defineComponent, h, provide, ref, watch } from 'vue'
import { hSlot } from '@/utils/_secret/render'
import { KTabsKey } from '@/utils/injectStrict'

export default defineComponent({
    name: 'KTabs',
    props: {
        modelValue: {
            type: String,
            required: true,
        },
    },

    emit: ['update:modelValue'],

    setup(props, { slots, emit }) {
        const modelValue = ref<string>(props.modelValue)
        const updateModelValue = (val: string) => {
            emit('update:modelValue', val)
        }

        watch(
            () => props.modelValue,
            (newVal) => (modelValue.value = newVal),
        )

        provide(KTabsKey, {
            modelValue,
            updateModelValue,
        })

        return () =>
            h(
                'div',
                {
                    class: 'k-tab-nav',
                },
                hSlot(slots.default),
            )
    },
})
