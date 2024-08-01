import {createRouter, createWebHistory} from 'vue-router';
import Dashboard from '../views/Dashboard.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'dashboard',
			component: Dashboard
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../views/AboutView.vue')
		},
		{
			path: '/expenses',
			name: 'expense',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../views/expense/index.vue')
		},
		{
			path: '/expense/create',
			name: 'add-expense',
			component: () => import('../views/expense/edit.vue')
		},
    {
			path: '/incomes/create',
			name: 'add-income',
			component: () => import('../views/income/index.vue')
		},
		{
			path: '/incomes',
			name: 'income',
			component: () => import('../views/income/index.vue')
		}
		
	]
});

export default router;

