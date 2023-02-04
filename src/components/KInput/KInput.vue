<script setup lang="ts">
import { computed } from 'vue'
import { ErrorObject } from '@vuelidate/core'

enum InputTypes {
    text = 'text',
    password = 'password',
    number = 'number',
    email = 'email',
}

const props = withDefaults(
    defineProps<{
        value: string | number
        name: string
        placeholder: string
        label: string
        width?: string
        error?: Array<ErrorObject>
        type: keyof typeof InputTypes
    }>(),
    {
        value: '',
        width: '300px',
    },
)

const emit = defineEmits<{
    (e: 'update:value', v: string): void
}>()

const handleInput = (event: Event) => {
    emit('update:value', (<HTMLInputElement>event.target).value)
}

const foo = computed(() => {
    if (props.type === 'password') {
        return { autocomplete: 'on' }
    }
    return null
})
</script>

<template>
    <div
        class="input-container"
        :style="{ width: width }"
    >
        <input
            class="k-input"
            :type="type"
            :name="name"
            :id="name"
            :value="value"
            :placeholder="placeholder"
            @input="handleInput"
        />
        <label
            :for="name"
            class="k-input-label"
        >
            {{ label }}
        </label>
        <transition-group>
            <div
                class="input-error"
                v-for="el in error"
                :key="el.$uid"
            >
                {{ el.$message }}
            </div>
        </transition-group>
    </div>
</template>

<style scoped></style>
