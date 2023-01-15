<template>
  <hr :style="style" v-bind="$props" />
</template>

<script>
export default {
  name: "button",

  props: ["style", "props"],
};
</script>
