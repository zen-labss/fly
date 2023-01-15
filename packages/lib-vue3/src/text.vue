<template>
  <p
    :style="{
      ...style,
    }"
    v-bind="$props"
  >
    <slot />
  </p>
</template>

<script>
export default {
  name: "text",

  props: ["style", "props"],
};
</script>
