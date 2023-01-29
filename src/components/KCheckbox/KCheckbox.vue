<script setup lang="ts">
interface CheckboxOption {
    optionId: string
    checked: boolean
}

const props = withDefaults(
    defineProps<{
        name: string
        id: string
        value: string
        label: string
        checked: boolean
        disabled?: boolean
        group?: boolean
    }>(),
    {
        name: '',
        value: '',
        label: '',
        checked: false,
    },
)

const emit = defineEmits<{
    (e: 'update:checked', v: boolean): void
    (e: 'handle-group', v: CheckboxOption): void
}>()

const handleInput = (event: Event) => {
    const isChecked = (<HTMLInputElement>event.target).checked

    if (props.group) {
        emit('handle-group', { optionId: props.id, checked: isChecked })
        return
    } else {
        emit('update:checked', isChecked)
    }
}
</script>

<template>
    <input
        class="k-checkbox"
        type="checkbox"
        :name="name"
        :value="value"
        :id="id"
        :checked="checked"
        :disabled="disabled"
        @input="handleInput"
    />
    <label :for="id">{{ label }}</label>
</template>

<style scoped></style>
