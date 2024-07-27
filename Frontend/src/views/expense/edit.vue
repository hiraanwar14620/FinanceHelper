<template>
	<div class="card">
		<div class="card-header">
			<h2 class="h2">Add Expense</h2>
		</div>
		<div class="card-body">
			<form>
				<div class="mb-3">
					<label class="form-label">Item Purchased</label>
					<input type="text" class="form-control" v-model="this.expense.item" />
				</div>
				<div class="mb-3">
					<label class="form-label">Item Price</label>
					<input type="number" class="form-control" v-model="this.expense.price" />
				</div>
				<div class="mb-3">
					<label class="form-label">Quantity</label>
					<input type="number" class="form-control" v-model="this.expense.quantity" />
				</div>
				<div class="mb-3">
					<label class="form-label">Date of Purchase</label>
					<input type="date" class="form-control" v-model="this.expense.date" />
				</div>
				<div class="d-grid gap-2 d-md-flex justify-content-md-end">
					<button type="button" v-on:click="this.saveExpense()" class="btn btn-primary">Save</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			expense: {
				item: '',
				price: 0,
				quantity: 1,
				date: new Date().toISOString().substr(0, 10)
			}
		};
	},
	methods: {
		saveExpense() {
			fetch('http://localhost:3000/api/expenses', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(this.expense)
			})
				.then(() => {
					this.$router.push('/');
				})
				.catch(err => {
					alert('Error occured while saving expense');
					console.log(err);
				});
		}
	}
};
</script>
