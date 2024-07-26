<template>
	<div class="card">
		<div class="card-header">
			<h2 class="h2">Expenses</h2>
		</div>
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
		}
	};
</script>
