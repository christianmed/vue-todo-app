<template>
  <footer class="Footer">
    <p class="Footer__copyright" v-text="copyright"></p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      copyright: "Christian Medina | Copyright 2018"
    };
  }
};
</script>

<style lang="scss">
@import "../scss/styles.scss";

.Footer {
  @include var(background-color, accent);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @include var(background-color, primary);
  @include var(color, accent);
}
</style>
