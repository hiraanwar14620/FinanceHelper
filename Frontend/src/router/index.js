import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'dashboard',
			component: () => import('../views/Dashboard.vue')
		},
		{
			path: '/expenses',
			name: 'expense',
			component: () => import('../views/expense/index.vue')
		},
		{
			path: '/expenses/create',
			name: 'add-expense',
			component: () => import('../views/expense/edit.vue')
		},
		{
			path: '/incomes/create',
			name: 'add-income',
			component: () => import('../views/income/edit.vue')
		},
		{
			path: '/incomes',
			name: 'income',
			component: () => import('../views/income/index.vue')
		}
	]
});

export default router;
