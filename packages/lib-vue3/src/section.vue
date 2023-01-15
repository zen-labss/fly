<template>
  <table align="center" :style="style" v-bind="$props">
    <tbody>
      <tr>
        <td><slot /></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "section",

  props: ["style", "props"],
};
</script>
