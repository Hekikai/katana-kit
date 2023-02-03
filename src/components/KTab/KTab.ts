import { computed, defineComponent, h } from 'vue'
import { injectKTabs } from '@/utils/injectStrict'

export default defineComponent({
    name: 'KTab',
    props: {
        name: {
            type: String,
            required: true,
        },
    },
    emits: ['update:modelValue'],

    setup(props, { slots, emit }) {
        const { updateModelValue, modelValue } = injectKTabs()

        const kTabStyle = computed(() => {
            return props.name === modelValue.value ? 'selected' : ''
        })

        return () =>
            h(
                'span',
                {
                    class: ['k-tab-nav__item', kTabStyle.value],
                    onClick() {
                        updateModelValue(props.name)
                    },
                },
                props.name,
            )
    },
})

// render: () =>
//   h(
//     'span',
//     {
//       class: 'k-tab-nav__item',
//       onClick(el: string) {
//         // TODO: ??????????
//       },
//     },
//     'text',
//   ),
