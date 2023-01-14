<template>
  <html :lang="lang" v-bind="$props">
    {{
      content
    }}
  </html>
</template>

<script>
export default {
  name: "html",

  props: ["lang", "props", "content"],
};
</script>