const reportRouter = [
    {
        path: '/report',
        name: 'report',
        component: () => import('../view/report/ReportList.vue')
    }
];
export default reportRouter;