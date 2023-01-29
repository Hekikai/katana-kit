<script setup lang="ts">
import { PropType } from 'vue'
import KCheckbox from '@/components/KCheckbox/KCheckbox.vue'

const props = defineProps({
    value: {
        type: Array as PropType<Array<string>>,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    options: {
        type: Array,
        required: true,
        validator: (val: Array<{ name: string; id: string }>) => {
            return val.every(
                (opt) => Object.hasOwn(opt, 'name') && Object.hasOwn(opt, 'id'),
            )
        },
    },
})

const emit = defineEmits<{
    (e: 'update:value', v: string[]): void
}>()

const checkForExisting = (id: string) => props.value.includes(id)

const handleCheckboxGroup = (params: {
    optionId: string
    checked: boolean
}) => {
    const optionsCopy = [...props.value]

    if (params.checked) {
        optionsCopy.push(params.optionId)
    } else {
        optionsCopy.splice(optionsCopy.indexOf(params.optionId), 1)
    }
    emit('update:value', optionsCopy)
}
</script>

<template>
    <div
        v-for="option in options"
        :key="option.id"
    >
        <k-checkbox
            :id="option.id"
            :label="option.name"
            :name="name"
            :value="option.name"
            :checked="checkForExisting(option.id)"
            group
            @handle-group="handleCheckboxGroup"
        />
    </div>
</template>

<style scoped></style>
