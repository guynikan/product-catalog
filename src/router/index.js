import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Product/List.vue"),
    children: [
      {
        path: "/product/:id/edit",
        name: "ProductEdit",
        component: () => import("../views/Product/Form.vue"),
      },
      {
        path: "/product/new",
        name: "ProductNew",
        component: () => import("../views/Product/Form.vue"),
      },
    ],
  },

  {
    path: "/storages",
    name: "Storages",
    component: () => import("../views/Storages/List.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
