<template>
  <div id="ToDoApp">
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

</style>
