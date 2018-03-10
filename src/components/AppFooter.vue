<template lang="pug">
  footer.Footer
    .Footer__copyright(v-text="copyright")
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      copyright: "Christian Medina | Copyright 2018"
    };
  }
};
</script>

<style lang="scss">

</style>
