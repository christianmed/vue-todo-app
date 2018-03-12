<template lang="pug">
  section.ToDo
    .ToDo-top
      h2.ToDo-top-title ToDo List
    .ToDo-middle
      .ToDo-middle-item
        .ToDo-middle-item__title Total
        .ToDo-middle-item__value(v-text="allTasks")
      .ToDo-middle-item
        .ToDo-middle-item__title Pending
        .ToDo-middle-item__value(v-text="pendingTasks")
      .ToDo-middle-item
        .ToDo-middle-item__title Done
        .ToDo-middle-item__value(v-text="completedTasks")
    form.ToDo-form
      input.ToDo-form__input(v-model="newTask" type="text" placeholder="Add new task")
      button.ToDo-form__button(@click.prevent="addTask") Add
    hr.ToDo-line
    Tasks(:tasks="tasks")
</template>

<script>
import Tasks from "./Tasks";

export default {
  name: "ToDo",
  components: {
    Tasks
  },
  data() {
    return {
      title: "ToDo List App",
      newTask: "",
      tasks: [
        {
          description: "Tarea por hacer 1",
          editing: false,
          completed: false
        },
        {
          description: "Tarea por hacer 2",
          editing: false,
          completed: false
        },
        {
          description: "Tarea por hacer 3",
          editing: false,
          completed: false
        }
      ]
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim().length > 0) {
        this.tasks.push({
          description: this.newTask,
          editing: false,
          completed: false
        });
        this.newTask = "";
      }
    }
  },
  computed: {
    allTasks() {
      return this.tasks.length;
    },
    pendingTasks() {
      let all = this.tasks.filter(task => !task.completed);
      return all.length;
    },
    completedTasks() {
      let all = this.tasks.filter(task => task.completed);
      return all.length;
    }
  }
};
</script>

<style lang="scss">
@import "../scss/styles.scss";

.ToDo {
  width: 100%;
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  &-top {
    @include var(background-color, secondary);

    &-title {
      font-size: 2rem;
      text-align: center;
      padding: 1.25rem;
    }
  }

  &-middle {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    @include var(background-color, secondary);

    &-item {
      text-align: center;

      &__title,
      &__value {
        font-size: 1.1rem;
        padding: 0 0 0.75rem;
      }

      &__value {
        @include var(color, white);
      }
    }
  }

  &-form {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    &__input,
    &__button {
      border: 0;
      outline: 0;
      height: 3rem;
      line-height: 3rem;
      font-size: 1rem;
    }

    &__input {
      grid-column: span 2;
      padding-left: 0.75rem;
      padding-right: 0.75rem;
      @include font(ubuntu);
      @include var(background-color, primary);
      @include var(color, white);

      &::placeholder {
        color: lighten(map-get($vars, primary), 10);
      }
    }

    &__button {
      @include var(background-color, accent);
      @include var(color, primary);
      text-transform: uppercase;
      cursor: pointer;
    }
  }

  &-line {
    width: 100%;
    margin: 1rem 0 0;
    border: none;
    border-bottom: thin solid map-get($vars, accent);
  }
}
</style>
