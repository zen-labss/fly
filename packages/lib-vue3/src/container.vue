<template>
  <div
    :style="{
      maxWidth: '700px',
      ...style,
    }"
    v-bind="$props"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "container",

  props: ["style", "props"],
};
</script>
