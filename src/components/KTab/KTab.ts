import { defineComponent, h } from 'vue'

export default defineComponent({
    name: 'KTab',
    props: {
        name: {
            type: String,
            required: true,
        },
    },
    emits: ['click'],

    render: () =>
        h(
            'span',
            {
                class: 'k-tab-nav__item',
                onClick(el: string) {
                    // TODO: ??????????
                },
            },
            'text',
        ),
})
