import {  defineComponent, h } from "vue";
import { hSlot } from '@/utils/_secret/render'

export default defineComponent((props, { slots, emit }) => {
  console.log(emit.name);
    return () => {
        return h(
            'div',
            {
                class: 'k-tab-nav',
                ['onUpdated:modelValue'](el: string) {
                    console.log(el)
                },
            },
            hSlot(slots.default),
        )
    }
})