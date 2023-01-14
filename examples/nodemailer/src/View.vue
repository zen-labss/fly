<template>
  <div>
    <h1>{{ fullname }}</h1>
    <span>Email enviado usando Vue.js e Nodemailer</span>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const name = ref("Hello");
const lastname = ref("World");

const fullname = computed(() => `${name.value} - ${lastname.value}`);
</script>
