<template>
	<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
		<h1 class="h2">Income</h1>
		<div class="btn-toolbar mb-2 mb-md-0">
			<div class="btn-group me-2">
				<RouterLink to="/incomes/create" class="btn btn-sm btn-outline-primary">Add Income</RouterLink>
			</div>
		</div>
	</div>
	<div class="card">
		<div class="card-body">
			<table class="table table-striped">
				<thead>
					<tr>
						<th>Date</th>
						<th>Amount</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="income in this.incomes">
						<td>{{ income.date && income.date !== '' ? income.date.toString().substr(0, 10) : '' }}</td>
						<td>{{ income.amount }}</td>
						<td>{{ income.description }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
	import {RouterLink} from 'vue-router';

	export default {
		data() {
			return {
				incomes: []
			};
		},
		mounted() {
			fetch('http://localhost:3000/api/incomes')
				.then(response => response.json())
				.then(json => {
					this.incomes = json;
					console.log('This is the income', this.incomes);
				})
				.catch(error => {
					alert('Error occured while getting incomes');
					console.error(error);
				});
		},
		components: {RouterLink}
	};
</script>
