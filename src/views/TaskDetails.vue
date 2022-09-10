<template>
  <Spinner v-if="!task" />
  <div class="card col-md-6 m-auto mb-3 text-center" v-else>
    <h5 class="card-header">{{ task.title }}</h5>
    <div class="card-body">
      <p class="card-text">
        {{ task.description }}
      </p>
      <p class="card-text">{{ task.date }} | {{ task.time }}</p>
      <p class="text-muted">{{ task.category }} @ {{ task.location }}</p>
      <router-link :to="{ name: 'editTask', params: { id: task.id } }"
        ><i class="fa-solid fa-pen-to-square"></i
      ></router-link>
      <i
        class="fa-sharp fa-solid fa-trash text-danger"
        @click="deleteTask()"
      ></i>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Spinner from "@/components/Spinner.vue";
export default {
  name: "taskDetails",
  components: { Spinner },
  props: ["id"],
  data() {
    return {
      task: null,
    };
  },
  created() {
    axios.get(`http://localhost:9000/tasks/${this.id}`).then((response) => {
      this.task = response.data;
    });
  },

  methods: {
    deleteTask() {
      if (confirm("Are You Sure")) {
        axios
          .delete(`http://localhost:9000/tasks/${this.id}`)
          .then((response) => {
            if (response) {
              return this.$router.push("/");
            }
          });
      }
    },
  },
};
</script>

<style scoped>
i {
  cursor: pointer;
  font-size: 21px;
}

i:hover {
  transform: scale(1.2);
}

i.fa-trash:hover {
  color: #d40718 !important;
}
</style>
