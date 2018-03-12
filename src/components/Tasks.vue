<template lang="pug">
  ul.Tasks
    li.Task(v-for="(task, i) in tasks" :key="i" :class="{editing: task.editing, completed: task.completed}")
      i.far(@click ="toggleStatus(task)" :class="task.completed ? 'fa-check-circle' : 'fa-circle'")
      template(v-if="!task.editing")
        span.Task-description {{ task.description }}
        i.far.fa-edit(@click="updateTask(task)")
        i.far.fa-trash-alt(@click="removeTask(i)")
      template(v-else)
        input.Task-description-edit(v-model="task.description" type="text")
        i.far.fa-check-circle(@click="confirm(task)")
        i.far.fa-times-circle(@click="discard(task)")
</template>

<script>
export default {
  name: "Tasks",
  props: {
    tasks: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      draft: ""
    };
  },
  methods: {
    toggleStatus(task) {
      if (!task.editing) {
        task.completed = !task.completed;
      }
    },
    removeTask(i) {
      this.tasks.splice(i, 1);
    },
    updateTask(task) {
      if (!task.completed) {
        this.tasks.forEach(task => (task.editing = false));
        this.draft = task.description;
        task.editing = true;
      }
    },
    confirm(task) {
      task.editing = false;
      this.draft = "";
    },
    discard(task) {
      task.description = this.draft;
      this.draft = "";
      task.editing = false;
    }
  }
};
</script>

<style lang="scss">
@import "../scss/styles.scss";

.Tasks {
  width: 100%;
}

.Task {
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  height: 3rem;
  border-bottom: thin solid map-get($vars, accent);

  &.editing {
    .Task-description-edit {
      @include var(color, accent);
    }
  }

  &.completed {
    background-color: darken(map-get($vars, white), 5);
    color: lighten(map-get($vars, primary), 50);
    span {
      text-decoration: line-through;
    }
  }

  .far,
  &-description {
    @include flexC();
  }

  .far {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);

    &:hover {
      @include var(color, accent);
    }

    &.fa-trash-alt,
    &.fa-times-circle {
      padding-left: 0;
    }
  }

  &-description {
    align-items: flex-start;
  }

  &-description-edit {
    height: 3rem;
    line-height: 3rem;
    font-size: 1rem;
    border: 0;
    outline: 0;
    border-bottom: thin solid map-get($vars, accent);
    @include font(ubuntu);
    @include var(color, primary);

    &::placeholder {
      @include var(color, primary);
    }
  }
}
</style>
