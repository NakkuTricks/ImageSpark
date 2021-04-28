import Vue from "vue";
import VueRouter from "vue-router";

import ViewHome from "../views/ViewHome";
import ViewUsers from "../views/ViewUsers";
import UserCard from "../views/UserCard";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: ViewHome,
  },
  {
    path: "/users",
    name: "users",
    component: ViewUsers,
    children: [
      {
        path: ":userLogin",
        name: "userCard",
        component: UserCard,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
