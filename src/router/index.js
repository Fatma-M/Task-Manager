import { createRouter, createWebHistory } from "vue-router";
import TaskList from "../views/TasksList.vue";
import TaskDetails from "../views/TaskDetails.vue";
import AddTask from "../views/AddTask.vue";
import EditTask from "../views/EditTask.vue";

const routes = [
  {
    path: "/",
    redirect: "/tasks",
  },
  {
    path: "/tasks",
    name: "tasks",
    component: TaskList,
  },
  {
    path: "/tasks/:id",
    name: "taskDetails",
    props: true,
    component: TaskDetails,
  },
  {
    path: "/tasks/edit/:id",
    name: "editTask",
    props: true,
    component: EditTask,
  },
  {
    path: "/add",
    name: "add",
    component: AddTask,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
