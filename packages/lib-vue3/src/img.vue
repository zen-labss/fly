<template>
  <img
    :src="src"
    :style="{
      display: 'block',
      outline: 'none',
      border: 'none',
      textDecoration: 'none',
      ...style,
    }"
    :width="width"
    :height="height"
    v-bind="$props"
  />
</template>

<script>
export default {
  name: "image",

  props: ["src", "style", "width", "height", "props"],
};
</script>
