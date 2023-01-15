<template>
  <div
    :style="{
      maxWidth: '700px',
      ...children,
    }"
    v-bind="$props"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "container",

  props: ["props"],
};
</script>