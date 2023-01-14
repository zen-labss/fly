<template>
  <a
    :style="{
      border: '2px solid #000',
      borderRadius: '10px',
      padding: '10px',
    }"
  >
    <span>{{ text }}</span>
  </a>
</template>

<script>
export default {
  name: "button",

  props: ["text"],
};
</script>