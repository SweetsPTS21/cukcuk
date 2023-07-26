const employeeRoutes = [
    {
        path: "/employee",
        name: "employee",
        component: () => import("../view/employee/EmployeeList.vue"),
    },
];

export default employeeRoutes;
