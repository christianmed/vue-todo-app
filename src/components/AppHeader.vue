<template>
  <header class="Header">
    <h1 class="Header__title">{{ title }}</h1>
    <h2 class="Header__subtitle">{{ description }}</h2>
  </header>
</template>

<script>
export default {
  data() {
    return {
      title: "Chris Med | Vue-App",
      description: "ToDo List"
    };
  }
};
</script>

<style lang="scss">
@import "../scss/styles.scss";

.Header {
  @include flexC();
  @include var(background-color, primary);
  @include var(color, accent);

  &__title,
  &__subtitle {
    @include fontWeight(light);
    padding: 0.25rem 0;
  }

  &__title {
    font-size: 2.25rem;
  }
}
</style>
