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
						<th>Update</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(income, index) in this.incomes" v-bind:key="index">
						<td>{{ income.date && income.date !== '' ? income.date.toString().substr(0, 10) : '' }}</td>
						<td>{{ income.amount }}</td>
						<td>{{ income.description }}</td>
						<td> <i class="bi bi-trash" v-on:click="deleteIncome(income._id)"></i> <i class="bi bi-pen"></i> </td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="modal" ref="myModal">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title">Delete Row</h4>
						<button type="button" class="btn-close" data-bs-dismiss="modal"></button>
					</div>
					<div class="modal-body"> Are you sure to Delete this row? </div>
					<div class="modal-footer">
						<button type="button" class="btn btn-primary" ref="deleteBtn">Delete</button>
						<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { RouterLink } from 'vue-router';
	import * as bootstrap from 'bootstrap';

	export default {
		data() {
			return {
				incomes: []
			};
		},
		mounted() {
			this.getAllIncomes();
		},
		methods: {
			getAllIncomes() {
				fetch('http://localhost:3000/api/incomes')
					.then(response => response.json())
					.then(json => {
						this.incomes = json;
					})
					.catch(error => {
						alert('Error occured while getting incomes');
						console.error(error);
					});
			},
			deleteIncome(id) {
				const context = this;
				const myModal = new bootstrap.Modal(this.$refs.myModal);
				myModal.show();
				this.$refs.deleteBtn.addEventListener('click', function () {
					fetch(`http://localhost:3000/api/incomes/${id}`, {
						method: 'DELETE'
					})
						.then(res => res.json())
						.then(() => {
							myModal.hide();
							context.getAllIncomes();
						})
						.then(res => console.log(res));
				});
			}
		},

		components: { RouterLink }
	};
</script>
<style>
	.bi {
		margin: 2px;
	}
</style>
