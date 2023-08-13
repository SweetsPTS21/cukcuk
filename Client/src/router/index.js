import { createRouter, createWebHashHistory } from "vue-router";
import employeeRoutes from "./employee";
import reportRoutes from "./report";

const routes = [...employeeRoutes, ...reportRoutes];

let router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
});

export default router;
