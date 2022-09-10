<template>
  <div class="card col-md-4 m-auto mb-3 text-center">
    <h5 class="card-header">{{ task.title }}</h5>
    <div class="card-body">
      <p class="card-text">
        {{ task.description }}
      </p>
      <router-link
        :to="{ name: 'taskDetails', params: { id: task.id } }"
        class="btn btn-primary"
        >View Task</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskCard",
  props: {
    task: Object,
  },
};
</script>

<style scoped></style>
