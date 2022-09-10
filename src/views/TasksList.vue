<template>
  <Spinner v-if="!tasks && !errorMessage" />
  <div class="container" v-if="!tasks && errorMessage">
    <div class="row">
      <div class="col">
        <h3 class="text-danger">{{ errorMessage }}</h3>
      </div>
    </div>
  </div>
  <div class="" v-if="tasks && tasks.length > 0">
    <TaskCard v-for="task in tasks" :id="task.id" :key="task.id" :task="task" />
  </div>
</template>

<script>
import axios from "axios";
import TaskCard from "@/components/TaskCard.vue";
import Spinner from "@/components/Spinner.vue";

export default {
  components: { TaskCard, Spinner },
  name: "TaskList",

  data() {
    return {
      tasks: null,
      errorMessage: null,
    };
  },

  created() {
    axios
      .get("http://localhost:9000/tasks")
      .then((response) => {
        this.tasks = response.data;
      })
      .catch((error) => {
        this.errorMessage = error;
      });
  },
};
</script>
