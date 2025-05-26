import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import HolaMundo from "@/components/HolaMundo.vue";
import GitHub from "@/components/Github.vue";
import VueTutorials from "../components/VueTutorials.vue";

const routes = [
  { path: "/", name: "Home", component: HelloWorld },
  { path: "/hola", name: "HolaMundo", component: HolaMundo },
  { path: "/github", name: "GitHub", component: GitHub },
  { path: "/vue-tutorials", name: "VueTutorials", component: VueTutorials },

  // Add more routes as needed...
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
