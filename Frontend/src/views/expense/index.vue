<template>
	<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
		<h1 class="h2">Expenses</h1>
		<div class="btn-toolbar mb-2 mb-md-0">
			<div class="btn-group me-2">
				<RouterLink to="/expenses/create" class="btn btn-sm btn-outline-primary">Add Expense</RouterLink>
			</div>
		</div>
	</div>
	<div class="card">

		<div class="card-body">
			<table class="table table-striped">
				<thead>
					<tr>
						<th>Date</th>
						<th>Item</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Total</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="expense in this.expenses">
						<td>{{ expense.date.substr(0, 10) }}</td>
						<td>{{ expense.item }}</td>
						<td>{{ expense.price }}</td>
						<td>{{ expense.quantity }}</td>
						<td>{{ expense.quantity * expense.price }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
	data() {
		return {
			expenses: []
		};
	},
	mounted() {
		fetch('http://localhost:3000/api/expenses')
			.then(response => response.json())
			.then(json => {
				this.expenses = json;
			})
			.catch(error => {
				alert('Error occured while getting expenses');
				console.error(error);
			});
	},
	components: { RouterLink }
};
</script>
