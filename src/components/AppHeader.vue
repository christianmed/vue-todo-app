<template lang="pug">
  header.Header
    h2.Header__title(v-text="title")
    p.Header__description(v-text="description")
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      title: "Header Title",
      description: "Header Description"
    };
  }
};
</script>

<style lang="scss">

</style>
