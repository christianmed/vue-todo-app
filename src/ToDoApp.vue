<template>
  <div class="ToDoApp">
    <AppHeader />
    <ToDo />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import ToDo from "./components/ToDo";
import AppFooter from "./components/AppFooter";

export default {
  name: "ToDoApp",
  components: {
    AppHeader,
    ToDo,
    AppFooter
  }
};
</script>

<style lang="scss">
@import "./scss/styles.scss";

.ToDoApp {
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr 40px;
}
</style>
