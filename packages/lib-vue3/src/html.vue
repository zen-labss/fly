<template>
  <html :lang="lang" v-bind="$props">
    <slot />
  </html>
</template>

<script>
export default {
  name: "html",

  props: ["lang", "props"],
};
</script>