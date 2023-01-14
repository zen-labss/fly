<template>
  <div>
    <h1>{{ fullname }}</h1>
    <Button text="Botão" />
  </div>
</template>

<script setup>
import Button from "../../lib-vue3/src/button.vue";

import { ref, computed } from "vue";

const name = ref("Hello");
const lastname = ref("World");

const fullname = computed(() => `${name.value} - ${lastname.value}`);
</script>
