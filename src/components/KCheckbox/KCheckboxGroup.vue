<script setup lang="ts">
import KCheckbox from '@/components/KCheckbox/KCheckbox.vue'

const props = defineProps({
    value: {
        type: Array,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    options: {
        type: Array,
        required: true,
      // TODO: type
        validator: (val) => {
            return val.every(
                (opt) => Object.hasOwn(opt, 'name') && Object.hasOwn(opt, 'id'),
            )
        },
    },
})

// TODO: type
const emit = defineEmits<{
    (e: 'update:value', v: Object): void
}>()

const checkForExisting = (id: string) => {
    return props.value?.includes(id)
}

// TODO: type
const handleCheckboxGroup = (params) => {
    const foo = [...props.value]

    if (params.checked) {
        foo.push(params.optionId)
    } else {
        foo.splice(foo.indexOf(params.optionId), 1)
    }
    emit('update:value', foo)
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
