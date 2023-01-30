<template>
    <h1>Input</h1>
    <h2>Input text</h2>
    <form @submit.prevent="submitForm">
        <k-input
            v-model:value="v.nameField.$model"
            :error="v.nameField.$errors"
            name="name"
            placeholder="Input your name"
            label="Your name"
            type="text"
            class="k-mb-sm"
        />

        <k-input
            v-model:value="v.emailField.$model"
            :error="v.emailField.$errors"
            name="email"
            placeholder="Input your email"
            label="Your email"
            type="email"
            class="k-mb-sm"
        />

        <k-input
            v-model:value="v.luckyField.$model"
            :error="v.luckyField.$errors"
            name="lucky"
            placeholder="Input your lucky number"
            label="Your number"
            type="number"
            class="k-mb-sm"
        />

        <k-input
            v-model:value="passwordField"
            name="password"
            placeholder="Input your password"
            label="Your password"
            type="password"
            class="k-mb-sm"
        />

        <k-input
            v-model:value="v.confirmPasswordField.$model"
            :error="v.confirmPasswordField.$errors"
            name="confirmPassword"
            placeholder="Confirm your password"
            label=""
            type="password"
            class="k-mb-sm"
        />

        <k-btn
            color="primary"
            label="Submit form"
            class="text-white"
        />
    </form>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import useVuelidate from '@vuelidate/core'
import {
    minLength,
    helpers,
    email,
    numeric,
    maxLength,
    sameAs,
    required,
} from '@vuelidate/validators'

import KInput from '@/components/KInput/KInput.vue'
import KBtn from '@/components/KBtn/KBtn.vue'

const nameField = ref('')
const emailField = ref('')
const luckyField = ref('')
const passwordField = ref('')
const confirmPasswordField = ref('')

const rules = computed(() => ({
    nameField: {
        minLength: helpers.withMessage(
            'Минимальная длина: 3 символа',
            minLength(3),
        ),
        required: helpers.withMessage('Обязательное поле', required),
    },
    emailField: {
        email: helpers.withMessage('Формат почты некорректен', email),
        required: helpers.withMessage('Обязательное поле', required),
    },
    luckyField: {
        maxLength: helpers.withMessage(
            'Максимальная длина: 2 символа',
            maxLength(2),
        ),
        numeric: helpers.withMessage('Только числовые значения!', numeric),
        required: helpers.withMessage('Обязательное поле', required),
    },
    confirmPasswordField: {
        sameAsPassword: helpers.withMessage(
            'Пароли не совпадают',
            sameAs(passwordField.value),
        ),
        required: helpers.withMessage('Обязательное поле', required),
    },
}))

const submitForm = () => {
    v.value.$touch()
    if (v.value.$errors.length) return
    alert('Форма отправлена!')
}

const v = useVuelidate(rules, {
    nameField,
    emailField,
    luckyField,
    confirmPasswordField,
})
</script>

<style scoped></style>
