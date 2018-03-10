<template lang="pug">
  section.ToDo
    h2.ToDo__title(v-text="title")
</template>

<script>
export default {
  name: "ToDo",
  data() {
    return {
      title: "ToDo List App"
    };
  }
};
</script>

<style lang="scss">

</style>
