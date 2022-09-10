<template>
  <p class="text-danger" v-if="errorMessage">{{ errorMessage }}</p>
  <form class="row g-3 w-50 m-auto p-5" @submit.prevent="addTask()">
    <div class="col-md-6">
      <label for="validationDefault01" class="form-label">Title</label>
      <input
        v-model="task.title"
        type="text"
        class="form-control"
        id="validationDefault01"
        required
      />
    </div>
    <div class="col-md-6">
      <label for="validationDefault02" class="form-label">Category</label>
      <input
        v-model="task.category"
        type="text"
        class="form-control"
        id="validationDefault02"
        required
      />
    </div>
    <div class="col-md-12">
      <label for="validationDefaultUsername" class="form-label" required
        >Description</label
      >
      <textarea
        v-model="task.description"
        class="form-control"
        placeholder="Write a simple description for your task (Optional)"
        id="floatingTextarea"
      ></textarea>
    </div>
    <div class="col-md-6">
      <label for="validationDefault03" class="form-label">Location</label>
      <input
        v-model="task.location"
        type="text"
        class="form-control"
        id="validationDefault03"
        required
      />
    </div>
    <div class="col-md-3">
      <label for="validationDefault04" class="form-label">Date</label>
      <input
        v-model="task.date"
        type="text"
        class="form-control"
        id="validationDefault03"
        required
      />
    </div>
    <div class="col-md-3">
      <label for="validationDefault05" class="form-label">Time</label>
      <input
        v-model="task.time"
        type="text"
        class="form-control"
        id="validationDefault05"
        required
      />
    </div>
    <div class="col-12">
      <button class="btn btn-primary" type="submit">Add Task</button>
    </div>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "addTask",
  data() {
    return {
      task: {
        id: "",
        category: "",
        title: "",
        description: "",
        location: "",
        date: "",
        time: "",
      },
      errorMessage: null,
    };
  },
  methods: {
    addTask() {
      axios
        .post("http://localhost:9000/tasks", this.task)
        .then((response) => {
          if (response) {
            return this.$router.push("/");
          } else {
            return this.$router.push("/add");
          }
        })
        .catch((error) => {
          this.errorMessage = error;
        });
    },
  },
};
</script>
